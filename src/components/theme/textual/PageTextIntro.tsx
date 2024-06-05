import Heading from "./Heading";
import Paragraph from "./Paragraph";
import { PageTextIntroProps } from "./types";

export default function PageTextIntro({
  headingLevel = "h2",
  heading,
  text,
  divider = true,
  color = "[#565c6c]",
}: PageTextIntroProps & { divider?: boolean; color?: string }) {
  return (
    <div className="flex flex-col">
      <Heading level={headingLevel}>{heading}</Heading>

      <Paragraph>{text}</Paragraph>

      {divider && (
        <span className={`divider h-[1px]  w-full my-4 bg-${color}`} />
      )}
    </div>
  );
}
