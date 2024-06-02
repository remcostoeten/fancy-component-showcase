"use client";

import React, { useEffect, useRef } from "react";

export default function HoverCard({
  width = "300px",
  height = "260px",
  borderRadius = "10px",
  bgColor = "rgba(255, 255, 255, 0.02)",
  hoverColor = "rgba(255, 255, 255, 0.05)",
  duration = "500ms",
  padding = "16px",
  flexDirection = "column",
  title,
  paragraph,
  icon,
  ctaText,
  ctaLink,
  isExternal,
}: {
  width?: string;
  height?: string;
  borderRadius?: string;
  bgColor?: string;
  hoverColor?: string;
  duration?: string;
  padding?: string;
  flexDirection?: "row" | "column";
  title?: string;
  paragraph?: string;
  icon?: React.ReactNode;
  ctaText?: string;
  ctaLink?: string;
  isExternal?: boolean;
}) {
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

      // Append the style element to the head
      document.head.appendChild(style);

      // Clean up function
      return () => {
        card.removeEventListener("mousemove", handleOnMouseMove);
        document.head.removeChild(style);
      };
    }
  }, []); // Empty dependency array means this effect runs once on mount and clean up on unmount

  return (
    <div
      ref={cardRef}
      className="card cursor-pointer bg-opacity-5 border border-opacity-10 rounded-lg relative"
      style={{
        width,
        height,
        borderRadius,
        backgroundColor: bgColor,
        padding,
        transitionDuration: duration,
      }}
    >
      {icon && <div className="mr-2">{icon}</div>}
      {title && <h2 className="text-xl font-bold">{title}</h2>}
      {paragraph && <p className="mt-2">{paragraph}</p>}
      {ctaText && ctaLink && (
        <a
          href={ctaLink}
          target={isExternal ? "_blank" : "_self"}
          className="mt-auto text-blue-500 hover:underline"
        >
          {ctaText}
        </a>
      )}
    </div>
  );
}
