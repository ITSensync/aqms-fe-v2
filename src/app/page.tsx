import Navbar from "./components/Navbar";
import Content from "./components/Content";

export default function Home() {
  return (
    <div
      className={`${
        process.env.AQMS_TYPE === "mini"
          ? `bg-[url('/bg_super_mini_v2.svg')]`
          : `bg-[url('/bg.svg')]`
      } bg-cover bg-center bg-no-repeat h-screen`}
    >
      <Navbar />
      <Content />
    </div>
  );
}
