import { Link } from "react-router-dom";
import { SectionIntro } from "../components/SectionIntro";
import drinks from "../data/drinks.json";
import type { MenuDrink } from "../types";

const menu = drinks as MenuDrink[];

export function DrinksPage() {
  const featuredDrinks = menu.filter((drink) => drink.featured);

  return (
    <main className="page">
      <section className="subhero">
        <div className="section__inner subhero__inner">
          <p className="section-tag">Drinks Page</p>
          <h1 className="subhero__title">An editable menu powered by JSON.</h1>
          <p className="subhero__body">
            The list below is driven by <code>src/data/drinks.json</code>, so you can add, remove, or update drinks
            without touching the page markup.
          </p>
          <div className="hero__actions">
            <Link className="button button--solid" to="/">
              Back to Home
            </Link>
            <a className="button button--ghost" href="https://www.pegasustaproom.com" target="_blank" rel="noreferrer">
              Official Website
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <SectionIntro
            eyebrow="Featured Picks"
            title="A few example pours to prove out the data model."
            body="These cards are just examples for now, but the structure is ready for a fuller menu whenever you want to expand it."
          />

          <div className="menu-grid">
            {featuredDrinks.map((drink) => (
              <article className="menu-card menu-card--featured" key={drink.id}>
                <div className="menu-card__meta">
                  <span>{drink.category}</span>
                  <span>{drink.abv}</span>
                </div>
                <h3>{drink.name}</h3>
                <p className="menu-card__style">
                  {drink.style} • {drink.origin}
                </p>
                <p>{drink.tastingNotes}</p>
                <div className="menu-card__footer">
                  <strong>{drink.price}</strong>
                  <span>Featured</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section menu-section">
        <div className="section__inner">
          <SectionIntro
            eyebrow="Full List"
            title="Current examples from the editable data file."
            body="Keep the file shape the same and you can update names, categories, ABV, notes, and prices whenever the menu changes."
          />

          <div className="menu-grid">
            {menu.map((drink) => (
              <article className="menu-card" key={drink.id}>
                <div className="menu-card__meta">
                  <span>{drink.category}</span>
                  <span>{drink.abv}</span>
                </div>
                <h3>{drink.name}</h3>
                <p className="menu-card__style">
                  {drink.style} • {drink.origin}
                </p>
                <p>{drink.tastingNotes}</p>
                <div className="menu-card__footer">
                  <strong>{drink.price}</strong>
                  <span>{drink.featured ? "Staff Pick" : "Menu Item"}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
