import Image from "next/image";
import Memory from "@/components/memory_contents";
import NavigationButton from "@/components/navigation_buttun";
import BackIcon from "@/components/icon/back";

export default function MemoryPage() {
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
        <div className="p-3">
        <NavigationButton
          href="home"
          label=""
          variant="back"
          icon={<BackIcon />}
        />
        </div>
        <div className="pt-5 flex justify-center items-center">
          <Memory />
        </div>
      </div>
    </div>
  );
}
