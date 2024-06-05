import React, { ReactNode, ReactElement } from "react";

type InfoLabelProps = {
  children?: ReactNode;
  icon?: ReactElement | null;
  className?: string;
  variant?: "gray" | "black" | "colorful";
};

export default function InfoLabel({
  children,
  icon,
  className,
  variant = "gray",
  ...props
}: InfoLabelProps) {
  const baseClasses =
    "relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center ease-out duration-200 text-xs rounded-md outline-none transition-all outline-0 shadow-sm px-2.5 py-1 h-[26px] translate-y-[1px]";
  const variantClasses = {
    gray: "bg-grey-accent hover:bg-grey-accent-hover border border-grey-stroke hover:border-gray-accent-hover",
    black:
      "bg-black hover:bg-black-hover border border-black-stroke hover:border-black-hover",
    colorful:
      "bg-colorful hover:bg-colorful-hover border border-colorful-stroke hover:border-colorful-hover",
  };

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {icon && <div className="h-[14px] w-[14px] mr-2">{icon}</div>}
      {children}
    </div>
  );
}

/**
 * This component can be used to display an info label.
 * It's especially useful in a card-like layout where you want to display some text with an optional icon and different color variants.
 *
 * Here are some examples of how you can use this component:
 *
 * <InfoLabel>Some content</InfoLabel> // Default gray variant without an icon
 * <InfoLabel icon={<YourSVG />}>Some content</InfoLabel> // Gray variant with an icon
 * <InfoLabel variant="black">Some content</InfoLabel> // Black variant without an icon
 * <InfoLabel variant="black" icon={<YourSVG />}>Some content</InfoLabel> // Black variant with an icon
 * <InfoLabel variant="colorful">Some content</InfoLabel> // Colorful variant without an icon
 * <InfoLabel variant="colorful" icon={<YourSVG />}>Some content</InfoLabel> // Colorful variant with an icon
 */
