"use client ";

import { useRef, useEffect } from "react";

interface HoverCardProps {
  children: React.ReactNode;
  width?: string | number;
  height?: string | number;
  padding?: string | number;
  className?: string;
}

export default function HoverCard({
  children,
  width = "w-full",
  height = "200px",
  padding = "20px",
  className = "",
  ...props
}: HoverCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleOnMouseMove = (e: MouseEvent) => {
    const target = e.currentTarget as HTMLDivElement;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  useEffect(() => {
    const card = cardRef.current;
    if (card) {
      card.addEventListener("mousemove", handleOnMouseMove);

      const style = document.createElement("style");
      style.innerHTML = `
        .card::before {
          background: radial-gradient(
            500px circle at var(--mouse-x) var(--mouse-y),
            rgba(255,255,255,0.05),
            transparent 40%
          );
          border-radius: inherit;
          content: "";
          height: 100%;
          left: 0;
          top: 0;
          position: absolute;
          width: 100%;
          z-index: 2;
          opacity: 0;
          transition: opacity 500ms;
        }

        .card:hover::before {
          opacity: 1;
        }
      `;

      document.head.appendChild(style);

      return () => {
        card.removeEventListener("mousemove", handleOnMouseMove);
        document.head.removeChild(style);
      };
    }
  }, []);

  const style = {
    width,
    height,
    padding,
  };

  return (
    <div
      ref={cardRef}
      className={`card cursor-pointer bg-opacity-5 border border-opacity-10 rounded-lg grid place-items-center relative ${className}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
}
