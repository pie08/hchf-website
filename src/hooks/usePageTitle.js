import { useEffect } from "react";

export function usePageTitle(title) {
  useEffect(
    function () {
      document.title = title;
    },
    [title]
  );
}
