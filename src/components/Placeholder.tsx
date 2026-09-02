export default function Placeholder({
  title,
}: {
  title: string;
}) {
  return (
    <section className="section section--gray">
      <div className="container">
        <div className="section__head">
          <h1 className="section__title">{title}</h1>
          <p className="section__lede">
            This page is ready for content — we&apos;ll port it from the Divi HTML
            next.
          </p>
        </div>
      </div>
    </section>
  );
}
