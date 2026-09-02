"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { NAV_LINKS, SERVICE_LINKS, SITE } from "@/lib/site";

const MOBILE = 1024;
const SCROLL_THRESHOLD = 200;

function getHeaderHeight() {
  if (typeof window === "undefined") return "90px";
  if (window.innerWidth <= 480) return "68px";
  if (window.innerWidth <= MOBILE) return "76px";
  return "90px";
}

function getUtilityBarHeight() {
  if (typeof window === "undefined") return "42px";
  if (window.innerWidth <= MOBILE) return "36px";
  return "42px";
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const setHeights = useCallback(() => {
    const h = getHeaderHeight();
    const ub = getUtilityBarHeight();
    const root = document.documentElement;
    root.style.setProperty("--header-height", h);
    root.style.setProperty("--utility-bar-height", ub);
    root.style.setProperty("--total-header-height", `calc(${h} + ${ub})`);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, []);

  useEffect(() => {
    setHeights();
    const onScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
      setHeights();
    };
    const onResize = () => {
      setHeights();
      if (window.innerWidth > MOBILE) closeMenu();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    document.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("keydown", onKey);
    };
  }, [closeMenu, setHeights]);

  useEffect(() => {
    document.documentElement.classList.toggle("srb-nav-open", menuOpen);
    return () => document.documentElement.classList.remove("srb-nav-open");
  }, [menuOpen]);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const toggleServices = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.innerWidth > MOBILE) return;
    setServicesOpen((open) => !open);
  };

  return (
    <div id="srb-header-wrap">
      <div
        className={`nav-overlay${menuOpen ? " is-visible" : ""}`}
        aria-hidden={!menuOpen}
        onClick={closeMenu}
      />

      <div className="utility-bar">
        <div className="container utility-bar__inner">
          <div className="utility-bar__left">
            <a href={SITE.phoneHref} className="utility-bar__item">
              <i className="fa-solid fa-phone" aria-hidden="true" />
              {SITE.phoneDisplay}
            </a>
          </div>
          <div className="utility-bar__right">
            <Link
              href="/best-truck-repair-shop-in-edmonton"
              className="utility-bar__item utility-bar__promo"
            >
              Best Truck Repair Shops in Edmonton
              <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="container site-header__inner">
          <Link href="/" className="brand" aria-label={`${SITE.name} — Home`}>
            <Image
              className="brand__logo"
              src={SITE.logo}
              alt={`${SITE.name} logo`}
              width={72}
              height={72}
              priority
            />
          </Link>

          <button
            type="button"
            className={`nav-toggle${menuOpen ? " is-active" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="srbSiteNav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <nav
          className={`site-nav${menuOpen ? " is-open" : ""}`}
          id="srbSiteNav"
          aria-label="Main navigation"
        >
          <div className="site-nav__drawer-head">
            <Link href="/" className="brand" aria-label={`${SITE.name} — Home`}>
              <Image
                className="brand__logo"
                src={SITE.logo}
                alt={`${SITE.name} logo`}
                width={60}
                height={60}
              />
            </Link>
          </div>

          {NAV_LINKS.slice(0, 4).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`site-nav__link${isActive(link.href) ? " is-active" : ""}`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/best-truck-repair-shop-in-edmonton"
            className="site-nav__link site-nav__link--hide-lg"
          >
            Repair Shops
          </Link>

          <div
            className={`nav-dropdown${servicesOpen ? " is-open" : ""}`}
            id="srbServicesDropdown"
          >
            <button
              type="button"
              className="nav-dropdown__trigger site-nav__link"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              aria-controls="srbServicesMenu"
              id="srbServicesTrigger"
              onClick={toggleServices}
            >
              Services
              <span className="nav-dropdown__chevron" aria-hidden="true" />
            </button>
            <ul className="nav-dropdown__menu" id="srbServicesMenu" role="menu">
              {SERVICE_LINKS.map((service) => (
                <li key={service.href} role="none">
                  <Link href={service.href} role="menuitem">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {NAV_LINKS.slice(4).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`site-nav__link${isActive(link.href) ? " is-active" : ""}`}
            >
              {link.label}
            </Link>
          ))}

          <a href={SITE.phoneHref} className="site-nav__call btn btn--primary">
            Call Us
          </a>
        </nav>
      </header>
    </div>
  );
}
