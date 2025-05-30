import SendIcon from "../icon/send";

interface MessageInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSend: () => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const MessageInput = ({ value, onChange, onSend, onKeyPress }: MessageInputProps) => {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm p-4">
      <div className="relative flex items-center">
        <div className="flex-1 bg-white rounded-full px-4 py-3" style={{ border: '1px solid #876934' }}>
          <input
            type="text"
            value={value}
            onChange={onChange}
            onKeyPress={onKeyPress}
            placeholder=""
            className="w-full bg-transparent text-sm focus:outline-none"
            style={{
              backgroundColor: 'transparent',
              color: '#876934',
              padding: '8px',
            }}
          />
        </div>
        <button
          onClick={onSend}
          className="absolute right-0 w-20 h-20 flex items-center justify-center"
        >
          <SendIcon />
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
