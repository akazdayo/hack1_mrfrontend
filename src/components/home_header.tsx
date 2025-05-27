import Image from "next/image";

export function Home_Header() {
    return (
    <div className=" flex p-10">
      <div>
        <Image
        src="/images/Alice_icon.png"
        alt="Space background"
        width={70}
        height={70}
      />
    </div>
      <div className ="text-white  pl-5 ">
        <h2 className="text-2xl font-bold ">アリス</h2>
        <h2 className="text-md font-normal ">Level</h2>
      </div>
        
      </div>
    );
  }
  