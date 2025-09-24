'use client';
import Navbar from "./components/Navbar";
import Content from "./components/Content";

export default function Home() {
  /* useEffect(() => {
    const interval = setInterval(() => {
      window.location.reload(); // reload full page
    }, 5 * 60 * 1000); // 5 menit

    return () => clearInterval(interval); // cleanup
  }, []); */

  return (
    <div
      className={`${
        process.env.AQMS_TYPE === "mini"
          ? `bg-[url('/bg_mini_v2.svg')]`
          : process.env.AQMS_TYPE === 'supermini' ? `bg-[url('/bg_super_mini_v2.svg')]` : `bg-[url('/bg.svg')]`
      } bg-cover bg-center bg-no-repeat h-screen flex`}
    >
      <Navbar />
      <Content />
    </div>
  );
}
