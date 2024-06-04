"use client";

import { cn } from "@/core/utils/utils";
import GridPattern from "./_grid-pattern";

const GridPatternDashed = () => {
  return (
    <div className=" flex h-[59vh] -z-10 w-full overflow-hidden rounded-lg  bg-background p-20 md:shadow-xl">
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      />
    </div>
  );
};

export default GridPatternDashed;
