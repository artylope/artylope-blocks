---
title: 'Rebuilding my portfolio'
date: '2025-07-30'
published: false
---

Creating beautiful, responsive UI components has never been easier thanks to Tailwind CSS's utility-first approach.

## The Power of Utility Classes

Instead of writing custom CSS, Tailwind lets you style elements directly in your markup:

```jsx
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click me
</button>
```

## Component Composition

Build complex components by combining simple utilities:

```jsx
const Card = ({ children }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-zinc-800">
    <div className="px-6 py-4">{children}</div>
  </div>
);
```

## Responsive Design Made Easy

Tailwind's responsive prefixes make mobile-first design intuitive:

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Your content */}
</div>
```

## Dark Mode Support

Toggle between light and dark themes effortlessly:

```jsx
<div className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">
  Content adapts to theme
</div>
```

Tailwind CSS empowers developers to create stunning interfaces without leaving their HTML.
