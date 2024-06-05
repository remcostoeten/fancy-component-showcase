"use client";

import { useState } from "react";
import Link from "next/link";
import Tab from "./Tab";
import Cursor from "./Cursor";
import { NavbarProps, Position } from "./types";
import { menuItems } from "./menuItems";
import { usePathname } from "next/navigation";

const Navbar = ({ theme = "light", customColors }: NavbarProps) => {
  const pathname = usePathname();

  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const borderColor = customColors?.borderColor || "border-black";
  const bgColor = customColors?.bgColor || "bg-white";

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className={`relative my-10 mx-auto flex w-fit rounded-full p-1 border-2 ${borderColor} ${bgColor} ${theme}`}
    >
      {menuItems.map((item, index) => (
        <Tab
          key={index}
          setPosition={setPosition}
          isActive={pathname === item.link}
        >
          <Link
            href={item.link}
            className={`${pathname === item.link ? "text-neutral-400" : ""}`}
          >
            {item.name}
          </Link>
        </Tab>
      ))}
      <Cursor position={position} />
    </ul>
  );
};

export default Navbar;
