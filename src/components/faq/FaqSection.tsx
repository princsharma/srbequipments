import type { ReactNode } from "react";

type FaqSectionProps = {
  children: ReactNode;
  id?: string;
  lede?: string;
  actions?: ReactNode;
};

const DEFAULT_LEDE =
  "Quick answers about our truck & trailer repair services. Don't see your question? Call us anytime.";

export default function FaqSection({
  children,
  id = "faq",
  lede = DEFAULT_LEDE,
  actions,
}: FaqSectionProps) {
  return (
    <section
      id={id}
      className="section section--faq section--faq--center"
      data-testid="faq"
    >
      <div className="container">
        <div className="section__head section__head--center">
          <h2 className="section__title">
            Frequently Asked <em>Questions</em>
          </h2>
          <p className="section__lede">{lede}</p>
        </div>
        {children}
        {actions ? (
          <div className="section__actions section__actions--center faq-section__actions">
            {actions}
          </div>
        ) : null}
      </div>
    </section>
  );
}
