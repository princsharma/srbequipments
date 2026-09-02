import { HOME_FAQS } from "@/lib/home-data";
import { SITE } from "@/lib/site";

export default function HomeFaq() {
  return (
    <section id="faq" className="section section--faq" data-testid="faq">
      <div className="container two-col two-col--narrow">
        <div className="two-col__content two-col__content--sticky">
          <span className="eyebrow">FAQ</span>
          <h2 className="section__title">
            Frequently Asked <em>Questions</em>
          </h2>
          <p className="section__lede">
            Quick answers about our truck &amp; trailer repair services. Don&apos;t
            see your question? Call us anytime.
          </p>
          <a
            href={SITE.phoneHref}
            className="btn btn--primary"
            data-testid="faq-call-btn"
          >
            <i className="fa-solid fa-phone" aria-hidden="true" /> Talk to a
            Technician
          </a>
        </div>

        <div className="faq-list" data-testid="faq-list">
          {HOME_FAQS.map((item, index) => (
            <details key={item.q} className="faq-item" open={index === 0}>
              <summary>
                {item.q}
                <i className="fa-solid fa-plus" aria-hidden="true" />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
