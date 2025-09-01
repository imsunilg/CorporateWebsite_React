import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigation } from "react-router-dom";
import ShimmerPage from "./ShimmerPage";

// Displays a shimmer overlay during route changes for a consistent UX,
// even when components don't lazy-load data.
export default function RouteChangeShimmer({ minDuration = 300 }) {
  const location = useLocation();
  const navigation = useNavigation();
  const [show, setShow] = useState(false);
  const timerRef = useRef(null);
  const startRef = useRef(0);

  useEffect(() => {
    // If the data router reports loading, show shimmer
    const navLoading = navigation && navigation.state === "loading";
    if (navLoading) {
      // start overlay
      startRef.current = performance.now();
      setShow(true);
      return;
    }
    // Fallback: trigger on location change as a heuristic
    startRef.current = performance.now();
    setShow(true);

    // Hide after at least minDuration to avoid flicker
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setShow(false), minDuration);

    return () => clearTimeout(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location?.key]);

  // If using data router navigation signal, hide when it settles
  useEffect(() => {
    if (!navigation) return;
    if (navigation.state === "loading") {
      if (!show) setShow(true);
    } else if (show) {
      const elapsed = performance.now() - startRef.current;
      const remain = Math.max(0, minDuration - elapsed);
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setShow(false), remain);
    }
    return () => clearTimeout(timerRef.current);
  }, [navigation, show, minDuration]);

  if (!show) return null;

  return (
    <div className="route-shimmer-overlay">
      <ShimmerPage />
    </div>
  );
}
