"use client";

import React, { Ref, useCallback, useEffect, useRef, useState } from "react";

export function useIsVisible<T extends HTMLElement>() {
  const targetRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleObservation = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const { isIntersecting } = entries[0];

      if (isIntersecting && targetRef.current) {
        setIsVisible(true);
      }
    },
    []
  );

  // registering intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(handleObservation);

    if (!targetRef.current) return;
    observer.observe(targetRef.current);

    return () => observer.disconnect();
  }, [handleObservation]);

  return { isVisible, targetRef };
}
