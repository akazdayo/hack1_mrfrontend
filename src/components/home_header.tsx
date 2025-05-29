import Image from "next/image";

export function Home_Header() {
  return (
    <div
      className="bg-[url('/images/main1.jpg')] bg-cover bg-center"
    >
      <div className="bg-sky-200 bg-opacity-70">
        <div className="flex ml-15 pt-10 pb-5 px-6 items-center">
         
          <Image
            src="/images/Alice_icon.png"
            alt="Alice icon"
            width={70}
            height={70}
          />
          
          <div className="text-white pl-5">
            <h2 className="text-2xl font-bold">アリス</h2>
            <h2 className="text-md font-normal">Level</h2>
          </div>
        </div>
      </div>
    </div>
  );
}