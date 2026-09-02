import { SIMPLE_REVIEWS } from "@/lib/service-data";

export default function ServiceSimpleReviews() {
  return (
    <section id="reviews" className="section section--reviews" data-testid="reviews">
      <div className="container">
        <div className="section__head section__head--center">
          <h2 className="section__title">Happy Customers</h2>
        </div>
        <div className="review-grid review-grid--simple">
          {SIMPLE_REVIEWS.map((review) => (
            <article key={review.name} className="review-card review-card--simple">
              <div className="review-card__stars">
                <i className="fa-solid fa-star" aria-hidden="true" />
                <i className="fa-solid fa-star" aria-hidden="true" />
                <i className="fa-solid fa-star" aria-hidden="true" />
                <i className="fa-solid fa-star" aria-hidden="true" />
                <i className="fa-solid fa-star" aria-hidden="true" />
              </div>
              <p>&ldquo;{review.text}&rdquo;</p>
              <strong>{review.name}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
