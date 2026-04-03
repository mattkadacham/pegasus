# Pegasus Tap Room

React + TypeScript site for Pegasus Tap Room, built with Bun and Vite.

Live site:
`https://mattkadacham.github.io/pegasus/`

## Stack

- Bun
- React
- TypeScript
- Vite
- React Router

## Local Development

Install dependencies:

```bash
bun install
```

Start the dev server:

```bash
bun run dev
```

Build for production:

```bash
bun run build
```

## Deployment

The project is currently deployed to GitHub Pages via GitHub Actions.

Workflow:
- [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml)

Behaviour:
- pushes to `main` trigger a production build
- the built `dist/` output is uploaded and deployed to GitHub Pages

For GitHub Pages to work, the repository Pages source should be set to `GitHub Actions`.

## Drinks Data

The drinks page has two separate menu sources:

1. Beer board
   - rendered from a normalized internal `BeerMenuItem` shape
   - source can be either mock data or Untappd for Business

2. Bottles / cans / wine menu
   - shown via the printable PDF Pegasus already maintains

### Mock vs Untappd

The beer board uses:
- mock snapshot data from [src/data/mockBeerMenu.json](src/data/mockBeerMenu.json)
- or live Untappd menu data fetched in [src/lib/beerMenu.ts](src/lib/beerMenu.ts)

The page itself does not care which source is active. Both sources are mapped into the same internal display type.

Relevant files:
- [src/hooks/useDrinks.ts](src/hooks/useDrinks.ts)
- [src/lib/beerMenu.ts](src/lib/beerMenu.ts)
- [src/types.ts](src/types.ts)

### Environment Variables

Example env file:
- [.env.example](.env.example)

Variables:
- `VITE_BEER_MENU_SOURCE=mock`
- `VITE_UNTAPPD_EMAIL=`
- `VITE_UNTAPPD_READ_ONLY_TOKEN=`
- `VITE_UNTAPPD_MENU_ID=`

`VITE_BEER_MENU_SOURCE` options:
- `mock`
- `untappd`

If `untappd` is enabled but the credentials are missing, or the request fails, the app falls back to the local mock beer menu.

### Untappd Notes

The live beer board is designed around Untappd for Business.

Current implementation:
- the app fetches the menu endpoint with `full=true`
- Untappd data is mapped into the internal `BeerMenuItem` display shape
- the page can also show the official Untappd embed behind a CTA

Important note:
- this project assumes use of a read-only Untappd token for frontend display
- because this is a static site, any frontend-exposed token is visible in the built app
- that is acceptable only for read-only, public-facing menu data

## Project Structure

Key files:
- [src/pages/HomePage.tsx](src/pages/HomePage.tsx)
- [src/pages/DrinksPage.tsx](src/pages/DrinksPage.tsx)
- [src/content.ts](src/content.ts)
- [src/styles.css](src/styles.css)

## TODO

- Review and update the site copy with Pegasus so the final wording matches their tone, priorities, and current offerings
- Add real Untappd for Business credentials and switch the beer board from `mock` to `untappd`
- Decide whether the official Untappd embed should stay behind a Call to Action button or be removed entirely
- Consider replacing the PDF embed with structured data if Pegasus ever wants the full drinks menu rendered natively
- Add a lightweight update process for refreshing the local mock beer snapshot
- Review the homepage/about contact buttons once final icon choices are settled
- Add an image to the home page
