// index.js
const marked = require('marked');

// 示例 Markdown 文本
const markdownText = `
# Hello, Marked!

This is a simple **Markdown** example using Marked.

- Item 1
- Item 2
- Item 3

[Visit GitHub](https://github.com)
`;

// 将 Markdown 文本转换为 HTML
// const htmlContent = marked(markdownText);
const htmlContent = marked.parse(markdownText);

// 输出 HTML
console.log(htmlContent);
