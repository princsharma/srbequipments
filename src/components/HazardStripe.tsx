/** Industrial yellow/navy hazard-tape divider */
export default function HazardStripe({
  size = "md",
  flip = false,
  className = "",
}: {
  size?: "sm" | "md" | "lg";
  flip?: boolean;
  className?: string;
}) {
  const sizeClass =
    size === "sm"
      ? " hazard-stripe--sm"
      : size === "lg"
        ? " hazard-stripe--lg"
        : "";
  const flipClass = flip ? " hazard-stripe--flip" : "";
  return (
    <div
      className={`hazard-stripe${sizeClass}${flipClass}${className ? ` ${className}` : ""}`}
      aria-hidden="true"
    />
  );
}
