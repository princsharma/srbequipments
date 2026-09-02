import { SITE } from "@/lib/site";

export default function FloatingCall() {
  return (
    <a
      href={SITE.phoneHref}
      className="floating-call"
      aria-label={`Call ${SITE.name}`}
      data-testid="floating-call"
    >
      <i className="fa-solid fa-phone-volume" aria-hidden="true" />
      <span>{SITE.phoneDisplay}</span>
    </a>
  );
}
