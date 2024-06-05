import { ReactNode } from "react";

export type HeadingProps = {
  children: ReactNode;
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  letterSpacing?: string;
  lineHeight?: string;
  textAlign?: string;
  className?: string;
};

export type ParagraphProps = {
  children: ReactNode;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  textAlign?: string;
  className?: string;
};

export type PageTextIntroProps = {
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  heading?: string;
  text?: string;
  color?: string;
};
