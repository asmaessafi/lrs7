import { useEffect, useState } from "react";

export default function SideBackground() {
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < 768);
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    const sideImage = isMobile ? "/pictures/3 - Copie.png" : "/pictures/3.png";
  
    return (
      <div className="fixed top-0 right-0 h-screen w-screen pointer-events-none">
        <img
          src={sideImage}
          alt="Side background"
          className="w-full h-full object-contain opacity-80"
        />
      </div>
    );
  }
