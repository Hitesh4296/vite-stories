# Instagram Stories Static

This is a Vite + React + Tailwind CSS project, for the frontend of the Instagram Stories page,

- with two card variants, with and without story preview.
- with a shared story full screen preview component that can be hidden and shown.
- story moves forward by default based on a timer of 5s
- story moves forward by clicking on the right side of screen in preview
- story moves backward by clicking on the left side of screen in preview

Hosted as a static site on Cloudflare Pages.

- Steps:
  - `npm run build` to build the project
  - Create a new project on Cloudflare Pages
  - Upload the build folder

## Installation

I use pnpm (Feel free to use npm or yarn if you prefer)

```bash
pnpm install
```

## Running the project

```bash
pnpm run dev
```

## Testing

```bash
pnpm run test
```
