'use client';

import React, { useState, useRef, useEffect, KeyboardEvent, ChangeEvent } from 'react';
import Image from "next/image";
import DateIndicator from '@/components/chat/date';
import MessageInput from '@/components/chat/messageInput';
import MessageList from '@/components/chat/MessageList';
import Header from '@/components/chat/Header';

interface Message {
  id: number | null;
  text: string;
  sender: "alice" | "user";
  time: string;
  isRead: boolean | null;
}

// LLM APIのレスポンス型定義
interface LLMResponse {
  userMessage: Message;
  aiMessage: Message;
  success: boolean;
  error?: string;
}

// メインのチャットページ
export default function AliceChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: "こんにちは！アリスだよ！",
      sender: "alice",
      time: "12:50",
      isRead: false
    }
  ]);

  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async () => {
    if (newMessage.trim() && !isLoading && !isTyping) {
      const messageText = newMessage.trim();
      setNewMessage('');
      setIsLoading(true);
      setErrorMessage(null);

      // ユーザーメッセージを即座に追加
      const userMessage: Message = {
        id: messages.length + 1,
        text: messageText,
        sender: "user",
        time: new Date().toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' }),
        isRead: true
      };
      setMessages(prev => [...prev, userMessage]);

      try {
        // タイピングインジケーターを表示
        setIsTyping(true);
        setIsLoading(false);

        // APIにリクエストを送信
        const response = await fetch('/api/llm', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: messageText,
            conversationHistory: [...messages, userMessage]
          }),
        });

        const data: LLMResponse = await response.json();

        if (data.success && data.aiMessage) {
          // AIメッセージのみを追加
          setMessages(prev => {
            const aiMessageWithId = {
              ...data.aiMessage,
              id: prev.length + 1,
              isRead: data.aiMessage.isRead ?? false
            };
            return [...prev, aiMessageWithId];
          });
        } else {
          // APIからエラーが返された場合
          setErrorMessage(data.error || 'AIからの応答を取得できませんでした');
        }
      } catch (error) {
        // ネットワークエラーなどの場合
        setErrorMessage('通信エラーが発生しました。もう一度お試しください。');
        console.error('API呼び出しエラー:', error);
      } finally {
        // タイピングインジケーターを非表示
        setIsTyping(false);
        setIsLoading(false);
      }
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isLoading && !isTyping) {
      handleSendMessage();
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value);
  };

  return (

    <div className="relative min-h-screen overflow-hidden bg-gray-900/40">
      {/* 背景画像 */}
      <Image
        src="/images/chat.png"
        alt="Chat background"
        fill
        className="object-cover z-0"
      />

      <div className="relative z-10 flex flex-col min-h-screen max-w-sm mx-auto">
        {/* ヘッダー */}
        <Header />

        <div className="mt-30">
          {/* 日付インジケーター */}
          <DateIndicator />
          <div className="mt-3">
            {/* メッセージリスト */}
            <MessageList messages={messages} messagesEndRef={messagesEndRef} isTyping={isTyping} />

            {/* ローディング表示 */}
            {isLoading && (
              <div className="flex items-center justify-center py-4">
                <div className="flex items-center space-x-2 text-white/80">
                  <div className="animate-spin h-4 w-4 border-2 border-white/30 border-t-white rounded-full"></div>
                  <span className="text-sm">メッセージを送信中...</span>
                </div>
              </div>
            )}

            {/* エラーメッセージ表示 */}
            {errorMessage && (
              <div className="mx-4 mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
                <p className="text-red-300 text-sm">{errorMessage}</p>
                <button
                  onClick={() => setErrorMessage(null)}
                  className="mt-2 text-xs text-red-400 hover:text-red-300 underline"
                >
                  閉じる
                </button>
              </div>
            )}

            {/* 入力エリア */}
            <MessageInput
              value={newMessage}
              onChange={handleInputChange}
              onSend={handleSendMessage}
              onKeyPress={handleKeyPress}
              disabled={isLoading || isTyping}
            />
          </div>
        </div>
      </div>
    </div>
  );
}