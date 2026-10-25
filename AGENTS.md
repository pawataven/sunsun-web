## Tech stack

- Astro 7
- TypeScript 6 (strict, via `astro/tsconfigs/strict`); `@astrojs/check` does not support TypeScript 7 yet
- Tailwind CSS 4 via `@tailwindcss/vite`, no `tailwind.config.js` — customize the theme with `@theme` in `src/styles/global.css`

Run `npm run check` to type-check `.astro` and `.ts` files.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
