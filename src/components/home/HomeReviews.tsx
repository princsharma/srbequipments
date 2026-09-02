import { GOOGLE_REVIEWS_URL, HOME_REVIEWS } from "@/lib/home-data";

export default function HomeReviews() {
  return (
    <section id="reviews" className="section section--reviews" data-testid="reviews">
      <div className="container">
        <div className="section__head section__head--center">
          <span className="eyebrow">Reviews</span>
          <h2 className="section__title">
            Trusted by Truckers <em>Like You</em>
          </h2>
          <div className="reviews-summary">
            <div className="reviews-summary__stars" aria-label="Rated 4.8 out of 5">
              <i className="fa-solid fa-star" aria-hidden="true" />
              <i className="fa-solid fa-star" aria-hidden="true" />
              <i className="fa-solid fa-star" aria-hidden="true" />
              <i className="fa-solid fa-star" aria-hidden="true" />
              <i className="fa-solid fa-star-half-stroke" aria-hidden="true" />
            </div>
            <strong>4.8 / 5.0</strong>
            <span>· Based on verified Google reviews</span>
          </div>
        </div>

        <div className="review-grid" data-testid="review-grid">
          {HOME_REVIEWS.map((review) => (
            <article key={review.name} className="review-card">
              <div className="review-card__head">
                <span
                  className="review-card__avatar"
                  style={{ background: review.color }}
                >
                  {review.initials}
                </span>
                <div>
                  <strong>{review.name}</strong>
                  <span>
                    <i className="fa-brands fa-google" aria-hidden="true" /> Google
                    Review
                  </span>
                </div>
              </div>
              <div className="review-card__stars">
                <i className="fa-solid fa-star" aria-hidden="true" />
                <i className="fa-solid fa-star" aria-hidden="true" />
                <i className="fa-solid fa-star" aria-hidden="true" />
                <i className="fa-solid fa-star" aria-hidden="true" />
                <i className="fa-solid fa-star" aria-hidden="true" />
              </div>
              <p>&ldquo;{review.text}&rdquo;</p>
            </article>
          ))}
        </div>

        <div className="section__actions section__actions--center">
          <a
            href={GOOGLE_REVIEWS_URL}
            className="btn btn--outline"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="read-more-reviews"
          >
            Read More Reviews{" "}
            <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
