"use client";
import Image from "next/image";
import { Home_Header } from "@/components/home_header";
import NavigationButton from "@/components/navigation_buttun";
import ChatIcon from "@/components/icon/chat";
import Memory_Icon from "@/components/icon/memory";
import { Goal } from "@/components/goal";
import { useState, useEffect } from "react";


export default function Home() {
  const [isStart, setIsStart] = useState(true);
  // 今日の目標を管理する->これをGoalをデータベースに保存する。
  const [todayGoal, setTodayGoal] = useState<string>("");

  // 今日の目標を設定する関数
  useEffect(() => {
    const timerCompleted = sessionStorage.getItem("timerCompleted") === "true";
    setIsStart(!timerCompleted);
    if (timerCompleted) {
      sessionStorage.removeItem("timerCompleted");
    }
  }, []);

  const handleGoalChange = async (goal: string) => {
    setTodayGoal(goal);
    await fetch(`/api/db?content='${goal}'`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-900/40">
      {/* 背景画像 */}
      <Image
        src="/images/home.png"
        alt="Space background"
        fill
        className="object-cover z-0"
      />

      <div className="relative z-10">
        <Home_Header />
        <Goal onChange={setTodayGoal} isStart={isStart} />

        <div className="flex justify-center pt-10">
          <NavigationButton
            href="timer"
            label="ポロモードタイマー"
            variant="timer"
            icon=""
            onClick={() => handleGoalChange(todayGoal)} // 追加: onClickハンドラ
          />
        </div>

        <div className="mt-8 flex justify-center gap-6 ">
          <NavigationButton href="chat" label="" variant="chat" icon={<ChatIcon />} />
          <NavigationButton href="memory" label="" variant="memory" icon={<Memory_Icon />} />

        </div>
      </div>
    </div>

  );
}
