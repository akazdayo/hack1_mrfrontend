'use client';

import React, { useState, useRef, useEffect, KeyboardEvent, ChangeEvent } from 'react';
import Image from "next/image";
import NavigationButton from "@/components/navigation_buttun";
import BackIcon from "@/components/icon/back";
import DateIndicator from '@/components/chat/date';
import MessageBubble from "@/components/chat/MessageBubble";
import MessageInput from '@/components/chat/messageInput';
import MessageList from '@/components/chat/MessageList';
import Header from '@/components/chat/Header';

interface Message {
  id: number;
  text: string;
  sender: string;
  time: string;
  isRead: boolean;
}

// メインのチャットページ
export default function AliceChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "勉強やってみたいんだけどさ、一緒にやらない？",
      sender: "AI",
      time: "12:50",
      isRead: false
    },
  ]);
  
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        text: newMessage,
        sender: "user",
        time: new Date().toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' }),
        isRead: false
      };
      setMessages([...messages, message]);

      setNewMessage('');
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
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
        <MessageList messages={messages} messagesEndRef={messagesEndRef} />

        {/* 入力エリア */}
        <MessageInput
          value={newMessage}
          onChange={handleInputChange}
          onSend={handleSendMessage}
          onKeyPress={handleKeyPress}
        />
</div>
</div>
      </div>
    </div>
  );
}