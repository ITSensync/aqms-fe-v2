import Image from "next/image";
import Navbar from "./components/Navbar";
import Content from "./components/Content";

export default function Home() {
  return (
    <div className="bg-[url('/bg.svg')] bg-cover bg-center bg-no-repeat h-screen">
      <Navbar/>
      <Content/>
      {/* <div className="w-full h-full">
        <Image src="/bg.svg" alt="bg" width={500} height={500} className="w-full h-full"/>
      </div> */}
    </div>
  );
}
