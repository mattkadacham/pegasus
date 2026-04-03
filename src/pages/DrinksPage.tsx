import { useState } from "react";
import { Link } from "react-router-dom";
import { SectionIntro } from "../components/SectionIntro";
import { useDrinks } from "../hooks/useDrinks";

const bottlesPdfUrl = "https://www.pegasustaproom.com/wp-content/uploads/2024/09/PegClipMenu1.pdf";
const bottlesPdfEmbedUrl = `${bottlesPdfUrl}#view=FitH`;
const untappdEmbedUrl = "https://business.untappd.com/embeds/iframes/49169/174893";

export function DrinksPage() {
  const { items, source } = useDrinks();
  const [showOfficialBoard, setShowOfficialBoard] = useState(false);
  const scrollToMenu = () => {
    document.getElementById("other-drinks-menu")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="page">
      <section className="section">
        <div className="section__inner">
          <SectionIntro
            eyebrow="Beer Board"
            title="Current pours"
            body="A rolling line-up of current pours, from crisp lagers and hazy pales to richer, slower sippers. For bottles, cans, wine, and sparkling, head to the full drinks menu just below."
          />

          <div className="section-cta">
            <button className="button button--ghost" type="button" onClick={scrollToMenu}>
              See Bottles, Cans &amp; Wine
            </button>
          </div>

          <div className="menu-grid">
            {items.map((drink) => (
              <article className="menu-card menu-card--featured" key={drink.id}>
                <div className="menu-card__meta">
                  <span>{drink.section}</span>
                  <span>{drink.abv}</span>
                </div>
                <h3>{drink.name}</h3>
                <p className="menu-card__style">
                  {drink.style} • {drink.brewery}
                </p>
                <p>{drink.description}</p>
                <div className="menu-card__footer">
                  <strong>{drink.price}</strong>
                  <span>{source === "untappd" ? "Live Pour" : "Snapshot"}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="official-board">
            <div className="official-board__copy">
              <p>
                Prefer the official Untappd board view? You can open the embedded live board here without leaving the page.
              </p>
              <div className="section-cta">
                <button className="button button--ghost" type="button" onClick={() => setShowOfficialBoard((current) => !current)}>
                  {showOfficialBoard ? "Hide Official Live Board" : "Show Official Live Board"}
                </button>
                <a className="button button--solid" href="https://untappd.com/v/pegasus-tap-room/8260044" target="_blank" rel="noreferrer">
                  Open Untappd Venue Menu
                </a>
              </div>
            </div>

            {showOfficialBoard ? (
              <div className="embed-panel__frame">
                <iframe
                  title="Pegasus Untappd live beer menu"
                  src={untappdEmbedUrl}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="section menu-section" id="other-drinks-menu">
        <div className="section__inner">
          <SectionIntro
            eyebrow="Printable Menu"
            title="Bottles, cans, wine, and the rest"
            body="Beyond the taps, the full drinks menu covers bottles, cans, low and no alcohol, wine, sparkling, and everything else worth browsing a little more slowly."
          />

          <div className="section-cta">
            <a className="button button--solid" href={bottlesPdfUrl} target="_blank" rel="noreferrer">
              Download Printable Menu
            </a>
          </div>

          <div className="pdf-panel">
            <iframe title="Pegasus drinks menu PDF" src={bottlesPdfEmbedUrl} />
          </div>
        </div>
      </section>

    </main>
  );
}
