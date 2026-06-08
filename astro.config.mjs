import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark'; // New import for Astro v6
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
    markdown: {
        processor: unified({
            remarkPlugins: [remarkMath],
            rehypePlugins: [[rehypeKatex, { output: 'html' }]],
        }),
    },
    site: "https://jkhansell.github.io/portfolio_astro/",
});