import { useRef } from "react";
import { TabProps } from "./types";

const Tab = ({ children, setPosition, ...props }: TabProps) => {
  const ref = useRef<null | HTMLLIElement>(null);

  return (
    <li
      {...props}
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

export default Tab;
