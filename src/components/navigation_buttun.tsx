
'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import ChatIcon from './icon/chat';
import Image from "next/image";

type Variant = 'chat' | 'setting' | 'memory' | 'timer' ;

type NavigationButtonProps = {
  href: string;
  label: string;
  variant: Variant;
  className?: string;
  icon: React.ReactNode;
};

const NavigationButton: React.FC<NavigationButtonProps> = ({ href, label, variant, className,icon }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
  };

  // variantごとにスタイルを切り替え
  const getClassName = () => {
    switch (variant) {
      case 'chat':
        return ' text-white w-18 h-18  rounded-xl';
      case 'setting':
        return ' text-white  w-18 h-18 rounded-xl';
      case 'memory':
        return ' text-white w-18 h-18 rounded-xl';
      case 'timer':
        return 'border text-white px-6 py-4 rounded-xl shadow-lg ';
      default:
        return '';
    }
  };

  // timerだけ構造を変える（例：右矢印アイコン付き）
  if (variant === 'timer') {
    return (
      <button
        onClick={handleClick}
        className={`${getClassName()} ${className || ''}`}
        style={{ backgroundColor: 'transparent', padding: 0, border: 'none' }}
      >
        <img
          src="/images/timer.png"
          style={{ width: '300px', height: '75px' }}
          alt={label}
          
        />
      </button>
    );
  }
  
  

  // 通常のボタン構造
  return (
    <button onClick={handleClick} className={`${getClassName()} ${className || ''}`}
    style={{ backgroundColor: '#ffffff', border: '1px solid #7893C4' }}>
       <span className="flex items-center justify-center">{icon}</span>
      {label}
    </button>
  );
};

export default NavigationButton;
