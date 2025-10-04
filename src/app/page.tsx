'use client';
import LayoutFixed from "./components/LayoutFixed";
import LayoutMini from "./components/LayoutMini";

export default function Home() {
  /* useEffect(() => {
    const interval = setInterval(() => {
      window.location.reload(); // reload full page
    }, 5 * 60 * 1000); // 5 menit

    return () => clearInterval(interval); // cleanup
  }, []); */

  return (
    <>
      {process.env.AQMS_TYPE === 'fixed' ? <LayoutFixed/> : <LayoutMini/> }
    </>
  );
}
