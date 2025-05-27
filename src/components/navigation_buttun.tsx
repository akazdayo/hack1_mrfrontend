
'use client';

import { useRouter } from 'next/navigation';
import React from 'react';


type Variant = 'chat' | 'setting' | 'memory' | 'timer' ;

type NavigationButtonProps = {
  href: string;
  label: string;
  variant: Variant;
  className?: string;
};

const NavigationButton: React.FC<NavigationButtonProps> = ({ href, label, variant, className }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
  };

  // variantごとにスタイルを切り替え
  const getClassName = () => {
    switch (variant) {
      case 'chat':
        return 'border text-white p-9  rounded-xl';
      case 'setting':
        return 'border text-white  p-9 rounded-xl';
      case 'memory':
        return 'border text-white p-9 rounded-xl';
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
        style={{ backgroundColor: '#7893C4' }}
      >
        <span className="text-lg font-bold">{label}</span>
      </button>
    );
  }
  

  // 通常のボタン構造
  return (
    <button onClick={handleClick} className={`${getClassName()} ${className || ''}`}>
      {label}
    </button>
  );
};

export default NavigationButton;
