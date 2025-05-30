import Image from "next/image";
import NavigationButton from "@/components/navigation_buttun";
import BackIcon from "@/components/icon/back";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-900/40">
      {/* 背景画像 */}
      <Image
        src="/images/chat.png"
        alt="Space background"
        fill
        className="object-cover z-0"
      />
      <div className="relative z-10">
      <div className="h-28 w-full bg-black" style={{background:"#FDDE81"}}>
        <NavigationButton href="home" label="" variant="back" icon={<BackIcon />} />
        <div className="text-3xl text-white font-bold flex justify-center item-center">Alice</div>
      </div>
      </div>
      
      </div>
        );
}
