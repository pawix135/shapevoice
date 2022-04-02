import { useEffect, useState } from "react";

const useOffset = (offset: number = 100): boolean => {
  const [checkOffset, setCheckOffset] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= offset) {
      setCheckOffset(true);
    } else {
      setCheckOffset(false);
    }
  };

  return checkOffset;
};

export default useOffset;
