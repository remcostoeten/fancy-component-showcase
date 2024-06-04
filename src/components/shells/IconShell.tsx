import { ReactNode } from "react";

type IconShellProps = {
  children: ReactNode;
  bg?: string;
  border?: string;
  className?: string;
  showShadow?: boolean;
};

export default function IconShell({
  children,
  bg = "bg-gray-accent",
  border = "text-foreground-light",
  className,
  showShadow = true,
  ...props
}: IconShellProps) {
  return (
    <div
      className={`${className} {rounded ${bg} ${border} p-1.5 ${showShadow ? "shadow-sm" : ""}`}
      {...props}
    >
      {children}
    </div>
  );
}
