import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

export default function WithTransition({ Component }) {
  const [transitioning, setIsTransitioning] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 280);
  }, [location.pathname]);

  return (
    <div
      className={
        transitioning ? "animate-slideUpLeave" : "animate-slideUpEnter"
      }
    >
      <Component />
    </div>
  );
}
