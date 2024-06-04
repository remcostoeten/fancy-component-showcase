import React from "react";
import { Position } from "./types";

const Cursor = ({ position }: { position: Position }) => {
  return (
    <div
      className="absolute bg-neutral-400 rounded-full transition-all duration-300"
      style={{
        left: position.left,
        width: position.width,
        opacity: position.opacity,
      }}
    />
  );
};

export default Cursor;