<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Page motion

New top-level pages should use `components/ui/ScrollMotion.tsx` in place of a
plain `<main>`. Apply `data-reveal` to heading or content blocks,
`data-reveal-group` to containers whose direct children should stagger, and a
subtle `data-parallax="0.018"` to `data-parallax="0.025"` only on major intro
blocks. Keep motion restrained and preserve the built-in reduced-motion
behavior.
