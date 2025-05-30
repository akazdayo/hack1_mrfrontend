import MessageItem from './message_Item';

interface Message {
  id: number;
  text: string;
  sender: string;
  time: string;
  isRead: boolean;
}

interface MessageListProps {
  messages: Message[];
  messagesEndRef: React.RefObject<HTMLDivElement>;
}

const MessageList = ({ messages, messagesEndRef }: MessageListProps) => (
  <div className="px-4 pb-20 space-y-3">
    {messages.map((message) => (
      <MessageItem key={message.id} message={message} />
    ))}
    <div ref={messagesEndRef} />
  </div>
);

export default MessageList