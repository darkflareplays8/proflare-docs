# proflare-docs

Docs site for ProFlare's npm packages, at docs.proflare.dev.

Built with Astro + Starlight.

## Structure

```
src/content/docs/
  index.mdx                     -> /
  npm/
    sigv4-lite/
      index.mdx                 -> /npm/sigv4-lite/
      api.mdx                   -> /npm/sigv4-lite/api/
      examples.mdx               -> /npm/sigv4-lite/examples/
```

Adding docs for another package: create `src/content/docs/npm/<package-name>/` and add a section to the sidebar in `astro.config.mjs`.

## Dev

```
npm install
npm run dev
```

## Build

```
npm run build
```

Output goes to `dist/`.

## Deploy

Connected to Cloudflare Pages via GitHub. Push to `main` to deploy.

Cloudflare Pages build settings:
- Build command: `npm run build`
- Build output directory: `dist`
