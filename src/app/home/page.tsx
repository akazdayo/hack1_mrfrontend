import Image from "next/image";
import { Home_Header } from "@/components/home_header";
import NavigationButton from "@/components/navigation_buttun";
import ChatIcon from "@/components/icon/chat";
import Memory_Icon from "@/components/icon/memory";
import SettingIcon from "@/components/icon/setting";
import { Goal } from "@/components/goal";


export default function Home() {
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
        <Goal/>
        
          <div className="flex justify-center pt-10">
            <NavigationButton
              href="timer"
              label="ポロモードタイマー"
              variant="timer"
              icon=""
            />
          </div>

          <div className="mt-10 flex justify-center gap-4 ">
            <NavigationButton href="chat" label="" variant="chat" icon={<ChatIcon />} />
            <NavigationButton href="memory" label="" variant="memory"icon={<Memory_Icon />} />
            <NavigationButton href="setting" label="" variant="setting" icon={<SettingIcon />}/>
          </div>
        </div>
      </div>
    
  );
}
