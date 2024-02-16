import { useEffect } from "react";

export function useOutsideAlerter({
  ref,
  handleClick,
}: {
  ref: React.MutableRefObject<HTMLElement | null>;
  handleClick(): void;
}) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        handleClick();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
