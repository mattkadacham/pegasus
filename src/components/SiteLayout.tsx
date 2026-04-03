import { Link, Outlet } from "react-router-dom";
import { navLinks } from "../content";

export function SiteLayout() {
  const homeSectionHref = (section: string) => `${import.meta.env.BASE_URL}?section=${section}`;

  return (
    <div className="app-shell">
      <div className="noise" aria-hidden="true" />

      <header className="topbar">
        <Link className="brand" to="/">
          Pegasus
        </Link>
        <nav aria-label="Primary">
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
