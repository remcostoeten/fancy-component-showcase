import React, { ReactElement } from "react";

type TitleWithIconProps = {
  icon: ReactElement;
  heading: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
};

export default function TitleWithIcon({
  icon,
  heading,
  level = 3,
}: TitleWithIconProps) {
  const Heading = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <div className="flex items-center space-x-3">
      {icon}
      <Heading>{heading}</Heading>
    </div>
  );
}

/**
 * This component can be used to display a title with an icon.
 * It's especially useful in a card-like layout where you want to
 * have a title accompanied by an icon for visual emphasis.
 */
