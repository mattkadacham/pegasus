import { Link } from "react-router-dom";
import { SectionIntro } from "../components/SectionIntro";
import { featuredCategories, features, openingHours, reviews, socials, stats } from "../content";

export function HomePage() {
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
          <p className="hero__subhead">Craft beer, gin, wine, and rum in a quietly dramatic room.</p>
          <div className="hero__ornament" aria-hidden="true">
            <span />
            <i />
            <span />
          </div>
          <p className="hero__copy">
            An intimate Canterbury bar with rotating taps, a serious spirits back bar, and the kind of atmosphere that
            makes one drink turn into the whole evening.
          </p>
          <div className="hero__actions">
            <Link className="button button--solid" to="/drinks">
              Browse the Drinks Page
            </Link>
            <button
              className="button button--ghost"
              type="button"
              onClick={() => document.getElementById("visit")?.scrollIntoView({ behavior: "smooth", block: "start" })}
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
              title="A polished little hideaway in the heart of Canterbury."
              body="Founded in 2018, Pegasus Tap Room blends Victorian character with a more curated, modern drinks culture. It feels historic without becoming dusty, and refined without losing warmth."
            />
            <p className="about__extra">
              Exposed beams, small corners, and cinema seating give the room its personality. The drinks program does
              the rest, moving from hop-forward pints to globe-spanning gins with the same sense of care.
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
            title="A menu built for regulars and the gloriously curious."
            body="The bar offer stays broad, but the dedicated drinks page is now where the editable live list belongs. Update the JSON file and the page updates with it."
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
              Open Full Drinks Page
            </Link>
          </div>
        </div>
      </section>

      <section className="section atmosphere" id="atmosphere">
        <div className="section__inner atmosphere__grid">
          <div>
            <SectionIntro
              eyebrow="The Space"
              title="Historic texture, low lighting, and a little theatre."
              body="Pegasus feels intimate rather than tiny. It balances old wood, moody glow, and a sense of discovery that works equally well for a quick pint or a slower evening."
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
              title="Opening hours, contact, and where to find the front door."
              body="Everything you need before heading over, whether you are planning a relaxed weekday drink or timing a Saturday stop in Canterbury."
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
            title="Tap takeovers, themed pours, and reasons to come back often."
            body="The quickest way to catch new releases, takeover nights, and special tastings is to follow Pegasus online. This is a place with a living calendar."
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
