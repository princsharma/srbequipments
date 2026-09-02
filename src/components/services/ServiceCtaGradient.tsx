import type { ReactNode } from "react";

type ServiceCtaGradientProps = {
  children: ReactNode;
  large?: boolean;
  className?: string;
};

export default function ServiceCtaGradient({
  children,
  large = false,
  className = "",
}: ServiceCtaGradientProps) {
  const classes = [
    "cta-gradient",
    large ? "cta-gradient--lg" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={classes}>{children}</div>;
}
