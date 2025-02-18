import { useEffect } from "react";
import { useState } from "react";

function useScreenSize() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  return isSmallScreen;
}

export default useScreenSize;
