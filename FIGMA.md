# Figma — New Design System

Canonical design file for this project:

https://www.figma.com/design/WRrQVjZBnyWDdtFfgwdHqp/New-Design-System?node-id=0-1&t=qC4iXbnJnQfBK9rs-1

## Identifiers (for tools and integrations)

| Field | Value |
|--------|--------|
| File name | New Design System |
| `fileKey` | `WRrQVjZBnyWDdtFfgwdHqp` |
| Default node (`node-id=0-1` in URL) | `0:1` (hyphens in the URL become colons in the API) |

Use the URL above as the single source of truth when updating tokens, components, or layout specs. For mapping Figma components to React code, consider [Figma Code Connect](https://www.figma.com/developers/code-connect).

## Design tokens (variables)

Created in this file as **local variable collections** (aligned with `src/index.css` light theme). Each collection uses **one mode** so it stays compatible with **Figma Free** (single mode per collection). To add a full **Light / Dark** mode pair in one semantic collection, upgrade Figma or split dark into a second collection.

| Collection | Mode | Contents |
|------------|------|----------|
| **Keymate / Primitives** | `Value` | Raw palette: `primitive/white`, `primitive/black`, `primitive/gray/*`, `primitive/slate/*`, `primitive/blue/*`. Scopes hidden (`[]`). WEB code syntax `var(--primitive-…)`. |
| **Keymate / Layout** | `Value` | `spacing/xs` … `spacing/3xl` (px floats), `radius/none` … `radius/full`. Scopes set for layout pickers. WEB code syntax `var(--spacing-…)` / `var(--radius-…)`. |
| **Keymate / Semantic** | `Light` | Semantic colors **aliased** to primitives, e.g. `color/bg/default`, `color/text/muted`, `color/action/primary`. WEB code syntax `var(--color-…)`. |

**Semantic → primitive mapping (Light):** `color/bg/default` → gray/50, `color/bg/surface` → white, `color/bg/surface-2` → gray/100, `color/bg/inverse` → slate/950, `color/text/default` → gray/900, `color/text/muted` → gray/600, `color/text/on-inverse` → gray/50, `color/border/default` → gray/200, `color/action/primary` → blue/500, `color/action/primary-hover` → blue/400, `color/action/on-primary` → white.
