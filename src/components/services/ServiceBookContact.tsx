import { SITE } from "@/lib/site";

type ServiceBookContactProps = {
  title: string;
  lede: string;
};

export default function ServiceBookContact({
  title,
  lede,
}: ServiceBookContactProps) {
  return (
    <section id="contact" className="section section--contact" data-testid="contact">
      <div className="container">
        <div className="section__head section__head--center">
          <h2 className="section__title">{title}</h2>
          <p className="section__lede">{lede}</p>
          <div className="section__actions section__actions--center">
            <a href={SITE.phoneHref} className="btn btn--primary btn--lg">
              <i className="fa-solid fa-phone-volume" aria-hidden="true" />{" "}
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
