# Synk homepage

Install dependencies with `pnpm install`, then start the development server with
`pnpm dev`. Use the pnpm version declared in `package.json` and Node.js 20.19+.

## Checks before pushing

`pnpm install` automatically installs the Husky Git hooks. Every push runs ESLint,
Vitest, TypeScript checks, and the production build; a failure blocks the push.
The hook invokes local binaries directly so it also works when pnpm is absent
from a Git client's PATH (Node.js must still be available).

Run all checks manually with `pnpm check`, or use `pnpm lint`, `pnpm test`, and
`pnpm build` individually. GitHub Actions runs the same checks before deployment.
