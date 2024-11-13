### 如何使用 Marked 在 Node.js 环境下实现一个简单的 Markdown例子。
1. 安装依赖
首先，你需要安装 Marked 库。确保已经初始化了一个 Node.js 项目。
```
yarn add marked
```
2. 编写代码
创建一个 index.js 文件，用于编译、转换和渲染 Markdown 文本。
```
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
```
3. 运行代码
在终端中运行以下命令来执行代码：
```
node index.js
```
4. 输出结果
运行后，你会在终端中看到以下 HTML 输出：
```
<h1>Hello, Marked!</h1>
<p>This is a simple <strong>Markdown</strong> example using Marked.</p>
<ul>
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
</ul>
<p><a href="https://github.com">Visit GitHub</a></p>
```
5. 客户端实现
基于浏览器实现的完整例子，如下：
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Markdown Renderer with Marked</title>
    <!-- 引入 Marked 库 -->
    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
        }
        textarea {
            width: 100%;
            height: 150px;
            margin-bottom: 20px;
        }
        .output {
            border: 1px solid #ddd;
            padding: 10px;
            background-color: #f9f9f9;
        }
    </style>
</head>
<body>
    <h1>Markdown Renderer</h1>
    <p>Type your Markdown content below:</p>

    <!-- Markdown 输入区域 -->
    <textarea id="markdown-input">
# Hello, Marked!

This is a simple **Markdown** example using Marked.

- Item 1
- Item 2
- Item 3

[Visit GitHub](https://github.com)
    </textarea>

    <!-- 渲染后的 HTML 输出区域 -->
    <h2>Rendered HTML:</h2>
    <div id="markdown-output" class="output"></div>

    <script>
        // 获取 DOM 元素
        const input = document.getElementById('markdown-input');
        const output = document.getElementById('markdown-output');

        // 渲染 Markdown 的函数
        function renderMarkdown() {
            const markdownText = input.value;
            const htmlContent = marked.parse(markdownText); // 使用 marked 进行解析
            output.innerHTML = htmlContent;
        }

        // 初次渲染
        renderMarkdown();

        // 监听输入事件，每次输入时重新渲染
        input.addEventListener('input', renderMarkdown);
    </script>
</body>
</html>
```