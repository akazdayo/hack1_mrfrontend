'use client';

import { useState } from "react";

function Memory() {
  const [borderColor, setBorderColor] = useState("#ffffff");
  const [showTag, setShowTag] = useState(false);

  const handleClick = () => {
    setBorderColor((prev) => (prev === "#ffffff" ? "#F9BF8D" : "#ffffff"));
    setShowTag((prev) => !prev);  
  };

  return (
    <div
      className="relative rounded-2xl bg-white/90 w-80 h-40 border-3 transition-all duration-300"
      style={{ borderColor }}
      onClick={handleClick}
    >
      {showTag && (
        <div className="absolute top-1 right-2  text-white text-xs font-semibold px-2 py-0.5 rounded transition-all duration-300"style={{backgroundColor: "#F9BF8D"}}>
          Picked
        </div>
      )}

      <h3 className="text-xl font-bold p-2"style={{color: "#AB6666"}}>2025年6月1日</h3>
      <p className="text-sm p-2"style={{color: "#AB6666"}}>二次関数はグラフで表すと放物線になる</p>
    </div>
  );
}

export default Memory;
