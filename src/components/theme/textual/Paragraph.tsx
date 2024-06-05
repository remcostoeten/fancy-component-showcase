import React from "react";
import clsx from "clsx";
import { ParagraphProps } from "./types";

export default function Paragraph({
  children,
  color = "text-gray-400",
  fontSize = "text-sm",
  fontWeight = "font-medium",
  lineHeight = "leading-5",
  textAlign = "text-left",
  className = "",
}: ParagraphProps) {
  const classes = clsx(
    color,
    fontSize,
    fontWeight,
    lineHeight,
    textAlign,
    className,
  );

  return <p className={classes}>{children}</p>;
}
/**
 * @example
 * To use the Paragraph component, import it from its module and use it in your JSX.
 * import Paragraph from './Paragraph';
 *
 * You can use the Paragraph component like this:
 * <Paragraph className="custom-class">This is a paragraph</Paragraph>
 *
 * The Paragraph component accepts the following props:
 * - color: The text color. Defaults to 'text-gray-400'.
 * - fontSize: The font size of the paragraph. Defaults to 'text-sm'.
 * - fontWeight: The font weight of the paragraph. Defaults to 'font-medium'.
 * - lineHeight: The line height of the paragraph. Defaults to 'leading-5'.
 * - textAlign: The text alignment of the paragraph. Defaults to 'text-left'.
 * - className: Additional CSS classes to apply to the paragraph. Defaults to ''.
 *
 * All props are optional. If not provided, the default values will be used.
 */
