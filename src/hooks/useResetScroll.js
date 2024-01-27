import { useEffect } from "react";

export function useResetScroll() {
  useEffect(function () {
    window.scroll({
      top: 0,
    });
  }, []);
}
