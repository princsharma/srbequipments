import Image from "next/image";
import type { ReactNode } from "react";

type ServiceCtaBannerProps = {
  title: ReactNode;
  description?: string;
  actions: ReactNode;
  iconSrc?: string;
  iconAlt?: string;
  stacked?: boolean;
};

export default function ServiceCtaBanner({
  title,
  description,
  actions,
  iconSrc = "/images/2026/06/Artboard-34-1.webp",
  iconAlt = "Truck icon",
  stacked = false,
}: ServiceCtaBannerProps) {
  return (
    <section className="cta-banner">
      <div className="cta-banner__bg" aria-hidden="true">
        <div className="cta-banner__grid" />
      </div>
      <div
        className={`container cta-banner__inner${stacked ? " cta-banner__inner--stack" : ""}`}
      >
        <i className="cta-banner__icon">
          <Image src={iconSrc} alt={iconAlt} width={64} height={64} />
        </i>
        <div style={stacked ? { textAlign: "center" } : undefined}>
          <h2 className="cta-banner__title">{title}</h2>
          {description ? <p>{description}</p> : null}
        </div>
        <div className="cta-banner__actions">{actions}</div>
      </div>
    </section>
  );
}
