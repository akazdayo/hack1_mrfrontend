import Image from "next/image";
import { Home_Header } from "@/components/home_header";
import NavigationButton from "@/components/navigation_buttun";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-900">
      {/* 背景画像 */}
      <Image
        src="/images/night-sky2.jpg"
        alt="Space background"
        fill
        className="object-cover z-0"
      />
      
      <div className="relative z-10">
        <Home_Header />

        <div className="bg-orange-900/40 min-h-screen">
          <div className="flex justify-center">
            <NavigationButton
              href="timer"
              label="ポロモードタイマー"
              variant="timer"
            />
          </div>

          <div className="mt-10 flex justify-center gap-4">
            <NavigationButton href="chat" label="" variant="chat" />
            <NavigationButton href="memory" label="" variant="memory" />
            <NavigationButton href="setting" label="" variant="setting" />
          </div>
        </div>
      </div>
    </div>
  );
}
