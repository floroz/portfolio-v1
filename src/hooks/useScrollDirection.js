import { useState, useEffect, useRef } from "react";

const useScrollDirection = () => {
  const [show, setShow] = useState(true);
  const lastcrollPosition = useRef(0);

  useEffect(() => {
    function handleScroll(e) {
      console.log(show);
      console.log(lastcrollPosition.current);
      console.log(window.scrollY);
      if (window.scrollY > lastcrollPosition.current) {
        setShow(false);
      } else {
        setShow(true);
      }

      lastcrollPosition.current = window.scrollY;
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastcrollPosition, show]);

  return { show };
};

export default useScrollDirection;
