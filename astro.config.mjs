import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark'; // New import for Astro v6
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
    site: "https://jkhansell.github.io",
    base: "/portfolio_astro",
    markdown: {
        processor: unified({
            remarkPlugins: [remarkMath],
            rehypePlugins: [[rehypeKatex, { output: 'html' }]],
        }),
    },
});