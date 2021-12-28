import React, { useRef, useEffect, useState } from "react";

const GeneralObserver = ({ children, onEnter, height, ...props }) => {
  const ref = useRef(null);
  const [isChildVisible, setIsChildVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio > 0) {
          setIsChildVisible(true);
          onEnter && onEnter();
        }
      },
      {
        root: null,
        rootMargin: "400px",
        threshold: 0,
      }
    );
    if (ref && ref.current) {
      observer.observe(ref.current);
    }
  }, [ref]);

  return (
    <div ref={ref} {...props}>
      {isChildVisible ? children : <div style={{ height, width: "100%" }} />}
    </div>
  );
};

export default GeneralObserver;
