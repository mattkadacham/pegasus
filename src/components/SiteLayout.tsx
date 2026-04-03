import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { navLinks } from "../content";

export function SiteLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const goToSection = async (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      window.setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 0);
      return;
    }

    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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
              <li key={item.href}>
                <button className="nav-link-button" type="button" onClick={() => void goToSection(item.href)}>
                  {item.label}
                </button>
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
            <button
              className="nav-link-button"
              type="button"
              onClick={() => void goToSection(item.href)}
              key={item.href}
            >
              {item.label}
            </button>
          ))}
        </div>
        <p className="footer__copy">86 St Dunstan&apos;s Street • Canterbury CT2 8AD • +44 1227 637280</p>
      </footer>
    </div>
  );
}
