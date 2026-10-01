import type { ReactNode } from "react";

export type FaqAccordionItem = {
  id?: string;
  question: string;
  answer: ReactNode;
  open?: boolean;
};

type FaqAccordionProps = {
  items: FaqAccordionItem[];
  testId?: string;
};

export default function FaqAccordion({
  items,
  testId = "faq-list",
}: FaqAccordionProps) {
  return (
    <div className="faq-list" data-testid={testId}>
      {items.map((item, index) => (
        <details
          key={item.id ?? item.question}
          className="faq-item"
          open={item.open ?? index === 0}
        >
          <summary>
            <h3>{item.question}</h3>
            <i className="fa-solid fa-plus" aria-hidden="true" />
          </summary>
          {typeof item.answer === "string" ? <p>{item.answer}</p> : item.answer}
        </details>
      ))}
    </div>
  );
}
