import { useState, useEffect, useRef, useCallback } from "react";

const useScrollDirection = () => {
  const [show, setShow] = useState(true);
  const lastcrollPosition = useRef(0);

  const useHandleScroll = useCallback(() => {
    if (window.scrollY > lastcrollPosition.current) {
      setShow(false);
    } else {
      setShow(true);
    }

    lastcrollPosition.current = window.scrollY;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", useHandleScroll);

    return () => {
      window.removeEventListener("scroll", useHandleScroll);
    };
  }, [useHandleScroll]);

  return { show };
};

export default useScrollDirection;
