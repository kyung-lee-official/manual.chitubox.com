# Getting Started

Run preload script to generate a context file _preload\docsContext.json_.

```bash
npm run prelaod
```

Then run dev script to start the development server:

```bash
npm run dev
```

# Conventions and Pitfalls

## LaTeX

LaTeX doesn't change switch to a new line automatically, avoid wirting long inline latex syntax like this:

```latex
% Don't do this ❌:
$\text{This is a very very very very very very very very very very very very very very very very very very very very very very very very very long line.} \cos\theta$
```

```latex
% Only use LaTeX where you need it ✅:
This is a very very very very very very very very very very very very very very very very very very very very very very very very very long line. $\cos\theta$
```

This will stretch the width of mdx content and cause unexpected UI problems.

## JSX Format

Do not insert an empty newlines between a starting tag and a ending tag:

Don't do this ❌:

```mdx
<Admonition type="note" title="注意">

OpenGL 版本不应低于 2.0。

</Admonition>
```

Do this ✅:

```tsx
<Admonition type="note" title="注意">
	OpenGL 版本不应低于 2.0。
</Admonition>
```

## Link

Styling `a` tag in _MDXComponent.tsx_ will lost the `href` property, the solution is to create a component to wrap the `a` tag.

Use `SpanA` defined in _MDXComponent.tsx_ for external links, and `NextLink` for internal links.

This may cause an error ❌:

```md
<SpanA href="https://www.lipsum.com">
	Lorem ipsum
</SpanA> dolor sit amet, consectetur adipiscing elit.
```

Inline (all content must be placed in a single line) ✅:

```md
<SpanA href="https://www.lipsum.com">Lorem ipsum</SpanA> dolor sit amet, consectetur adipiscing elit.
```

Paragraph ✅:

```md
<SpanA href="https://www.lipsum.com">
	Lorem ipsum
</SpanA>
```

Note: Prettier's auto-formating may cause syntax errors

## 2nd Level List

The `StyledP` doesn't apply to 2nd-level list items, the solution is to create a component to wrap the 2nd-level list items.

Problematic ❌:

```md
-   1st level works fine

    -   However, `StyledP` will not apply to this 2nd level item.
```

Workaround ✅:

```md
-   1st level works fine

    -   <SpanText>Wrap the 2nd level list items with a `SpanText` component can fix the problme.</SpanText>
```

## Indention

Use 4-space-width tab.

## Ordered Headings

Except 1st-level headings, don't add a dot suffix to the title number.

Don't do this ❌:

```md
## 1 Heading One

## 2 Heading Two

## 2.1. Heading Two-Dot-One
```

Do this ✅:

```md
## 1. Heading One

## 2. Heading Two

## 2.1 Heading Two-Dot-One
```

## ul, ol and li

Don't insert new lines between `<li>`s, which will add `<p>` tags to the `<li>`s and cause unexpected UI problems.

Don't do this ❌:

```md
-   qwer

-   asdf

-   zxcv
```

Do this ✅:

```md
-   qwer
-   asdf
-   zxcv
```
