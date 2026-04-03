import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { SectionIntro } from "../components/SectionIntro";
import { featuredCategories, features, openingHours, reviews, socials, stats } from "../content";

export function HomePage() {
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get("section");

    if (!section) {
      return;
    }

    window.setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  }, [location.search]);

  return (
    <main>
      <section className="hero" id="hero">
        <div className="hero__backdrop" aria-hidden="true" />
        <div className="hero__content">
          <p className="hero__eyebrow">St Dunstan&apos;s Street • Canterbury</p>
          <h1 className="hero__title">
            Pegasus
            <span>Tap Room</span>
          </h1>
          <p className="hero__subhead">Craft Beer &amp; Gin Palace • Est. 2018</p>
          <div className="hero__ornament" aria-hidden="true">
            <span />
            <i />
            <span />
          </div>
          <p className="hero__copy">
            Your escape in St Dunstan&apos;s Quarter: 14 rotating craft taps, 100+ world gins, fine wines, and rum in
            a centuries-old space with original wooden beams and intimate corners.
          </p>
          <div className="hero__actions">
            <Link className="button button--solid" to="/drinks">
              Open Live Drinks Page
            </Link>
            <button
              className="button button--ghost"
              type="button"
              onClick={() => scrollToSection("visit")}
            >
              Plan a Visit
            </button>
          </div>
        </div>
      </section>

      <section className="stats" aria-label="Highlights">
        {stats.map((stat) => (
          <article className="stat-card" key={stat.label}>
            <p className="stat-card__value">{stat.value}</p>
            <p className="stat-card__label">{stat.label}</p>
          </article>
        ))}
      </section>

      <section className="section about" id="about">
        <div className="section__inner about__grid">
          <div className="about__copy">
            <SectionIntro
              eyebrow="Our Story"
              title="A Gem in the Heart of Canterbury"
              body="Founded in July 2018, Pegasus Tap Room is an upmarket, eco-friendly bar on historic St Dunstan&apos;s Street, just a short walk from Canterbury Cathedral. Original beams, intimate alcoves, and vintage touches meet a genuinely world-class drinks selection."
            />
            <p className="about__extra">
              Whether you&apos;re chasing the next great IPA or exploring small-batch distilleries from around the world,
              the room is designed to feel characterful, calm, and quietly special.
            </p>
            <a className="button button--ghost" href="mailto:info@pegasustaproom.com">
              Get in Touch
            </a>
          </div>

          <div className="about__visual">
            <div className="about-card">
              <div className="about-card__image">
                <div className="about-card__glow" aria-hidden="true" />
                <div className="about-card__badge">
                  <strong>2018</strong>
                  <span>Established</span>
                </div>
                <div className="about-card__caption">
                  <span>Victorian bones</span>
                  <span>Modern pours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section drinks" id="drinks">
        <div className="section__inner">
          <SectionIntro
            eyebrow="What We Pour"
            title="The Finest Drops, Rotating Daily"
            body="Our line-up stays lively, from celebrated UK microbreweries to Belgian farmhouse ales and adventurous spirits. Start here for the shape of the menu, then open the live drinks page for the editable list."
          />

          <div className="drinks-grid">
            {featuredCategories.map((drink) => (
              <article className="drink-card" key={drink.name}>
                <div className="drink-card__top">
                  <span className="drink-card__icon">{drink.icon}</span>
                  {drink.count ? <span className="drink-card__count">{drink.count}</span> : null}
                </div>
                <h3>{drink.name}</h3>
                <p>{drink.description}</p>
              </article>
            ))}
          </div>

          <div className="section-cta">
            <Link className="button button--solid" to="/drinks">
              View Full Live Drinks List
            </Link>
            <button className="button button--ghost" type="button" onClick={() => scrollToSection("visit")}>
              Visit the Bar
            </button>
          </div>
        </div>
      </section>

      <section className="section atmosphere" id="atmosphere">
        <div className="section__inner atmosphere__grid">
          <div>
            <SectionIntro
              eyebrow="The Space"
              title="Old Bones, New Spirit"
              body="Step into a characterful building with centuries of Canterbury history. Original wooden beams frame intimate alcoves, warm lighting, and a room that feels tucked away without ever feeling closed in."
            />

            <div className="feature-list">
              {features.map((feature) => (
                <article className="feature-item" key={feature.label}>
                  <div className="feature-item__icon">{feature.icon}</div>
                  <div>
                    <h3>{feature.label}</h3>
                    <p>{feature.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="review-stack">
            {reviews.map((review) => (
              <blockquote className="review-card" key={review.source}>
                <p>{review.quote}</p>
                <cite>{review.source}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section visit" id="visit">
        <div className="section__inner visit__grid">
          <div>
            <SectionIntro
              eyebrow="Plan Your Visit"
              title="Opening Hours &amp; Contact"
              body="Everything you need before heading over, whether you&apos;re planning a relaxed weekday drink or a Saturday stop in Canterbury."
            />

            <div className="hours-card">
              {openingHours.map((entry) => (
                <div className="hours-row" key={entry.day}>
                  <span>{entry.day}</span>
                  <strong>{entry.time}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-panel">
            <div className="contact-panel__details">
              <a href="https://maps.google.com/?q=86+St+Dunstan%27s+Street,+Canterbury+CT2+8AD" target="_blank" rel="noreferrer">
                86 St Dunstan&apos;s Street, Canterbury, CT2 8AD
              </a>
              <a href="tel:+441227637280">+44 1227 637280</a>
              <a href="mailto:info@pegasustaproom.com">info@pegasustaproom.com</a>
              <a href="https://www.pegasustaproom.com" target="_blank" rel="noreferrer">
                pegasustaproom.com
              </a>
            </div>

            <a className="button button--solid" href="https://www.pegasustaproom.com" target="_blank" rel="noreferrer">
              Visit Official Site
            </a>

            <div className="map-frame">
              <iframe
                title="Pegasus Tap Room location"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Pegasus+Tap+Room,+86+St+Dunstan's+Street,+Canterbury+CT2+8AD&output=embed"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section events" id="events">
        <div className="section__inner">
          <SectionIntro
            eyebrow="What&apos;s On"
            title="Tap Takeovers &amp; Special Events"
            body="We regularly host brewery tap takeovers, themed gin evenings, and special tasting sessions. Follow along online to catch the next one."
            align="center"
          />

          <div className="socials">
            {socials.map((social) => (
              <a className="social-chip" href={social.href} key={social.label} target="_blank" rel="noreferrer">
                <span>{social.icon}</span>
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
