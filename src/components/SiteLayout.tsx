import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { navLinks } from "../content";

export function SiteLayout() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const homeSectionHref = (section: string) => `${import.meta.env.BASE_URL}?section=${section}`;

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname, location.search]);

  return (
    <div className="app-shell">
      <div className="noise" aria-hidden="true" />

      <header className="topbar">
        <Link className="brand" to="/">
          Pegasus
        </Link>
        <nav aria-label="Primary" className="topbar__nav">
          <ul className="nav-links">
            {navLinks.map((item) => (
              <li key={item.section}>
                <a className="nav-link-button" href={homeSectionHref(item.section)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="mobile-nav-toggle"
          type="button"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav-panel"
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMobileMenuOpen((current) => !current)}
        >
          {isMobileMenuOpen ? <X size={18} strokeWidth={1.25} /> : <Menu size={18} strokeWidth={1.25} />}
        </button>
        <nav
          className={`mobile-nav${isMobileMenuOpen ? " mobile-nav--open" : ""}`}
          id="mobile-nav-panel"
          aria-label="Mobile primary"
          aria-hidden={!isMobileMenuOpen}
        >
          <a className="mobile-nav__link" href={homeSectionHref("about")}>
            Story
          </a>
          <Link className="mobile-nav__link" to="/drinks">
            Drinks
          </Link>
          <a className="mobile-nav__link" href={homeSectionHref("atmosphere")}>
            Atmosphere
          </a>
          <a className="mobile-nav__link" href={homeSectionHref("visit")}>
            Visit
          </a>
          <a className="mobile-nav__link" href={homeSectionHref("events")}>
            Events
          </a>
        </nav>
      </header>

      <Outlet />

      <footer className="footer">
        <p className="footer__brand">Pegasus Tap Room</p>
        <p className="footer__sub">Craft Beer and Gin Palace • Canterbury, Kent</p>
        <div className="footer__links">
          {navLinks.map((item) => (
            <a className="nav-link-button" href={homeSectionHref(item.section)} key={item.section}>
              {item.label}
            </a>
          ))}
        </div>
        <p className="footer__copy">86 St Dunstan&apos;s Street • Canterbury CT2 8AD • +44 1227 637280</p>
      </footer>
    </div>
  );
}
