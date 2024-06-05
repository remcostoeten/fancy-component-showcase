import React from "react";
import clsx from "clsx";
import { HeadingProps } from "./types";

// Refactor the Heading component
export default function Heading({
  level = "h1",
  fontFamily = "font-inter-ui",
  fontSize = "text-[30px]",
  fontWeight = "font-medium",
  letterSpacing = "tracking-[-0.2px]",
  lineHeight = "leading-[40px]",
  className = "",
  children,
}: HeadingProps) {
  const Tag = level as keyof JSX.IntrinsicElements;

  const classes = clsx(
    fontFamily,
    fontSize,
    fontWeight,
    letterSpacing,
    lineHeight,
    className,
  );

  return <Tag className={classes}>{children}</Tag>;
}
/**
 * @example
 * To use the Heading component, import it from its module and use it in your JSX.
 * import Heading from './Heading';
 *
 * You can use the Heading component like this:
 * <Heading level="h2" className="custom-class">This is a level 2 heading</Heading>
 *
 * The Heading component accepts the following props:
 * - level: The heading level. Can be 'h1', 'h2', 'h3', 'h4', 'h5', or 'h6'. Defaults to 'h1'.
 * - fontFamily: The font family of the heading. Defaults to 'font-inter-ui'.
 * - fontSize: The font size of the heading. Defaults to 'text-[30px]'.
 * - fontWeight: The font weight of the heading. Defaults to 'font-medium'.
 * - letterSpacing: The letter spacing of the heading. Defaults to 'tracking-[-0.2px]'.
 * - lineHeight: The line height of the heading. Defaults to 'leading-[40px]'.
 * - className: Additional CSS classes to apply to the heading. Defaults to ''.
 *
 * All props are optional. If not provided, the default values will be used.
 */
