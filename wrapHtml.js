module.exports = (content, title) => `<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="robots" content="none">
        <title>${title}</title>
        <style>
            * {
                box-sizing: border-box;
            }
            html {
                font-size: 14px;
                padding: 3rem;
            }
            body {
                background: #fff;
                font: 1rem/1.3 monospace;
                margin: 0;
                padding: 0;
                max-width: 500px;
            }
            a {
                padding: 2px 4px;
                margin: -2px -4px;
            }
            a:link {
                color: #00e;
            }
            a:visited,
            a:visited:active {
                color: #428;
            }
            a:not(:active):hover {
                color: #fff;
            }
            a:link:hover {
                background-color: #00e;
            }
            a:visited:hover {
                background-color: #428;
            }
            a:active,
            a:active:hover {
                background-color: #0ee;
            }
            ::selection {
                background: fuchsia;
                color: #fff;
            }
            ::-moz-selection {
                background: fuchsia;
                color: #fff;
            }
        </style>
    </head>
    <body>
        ${content}
    </body>
</html>
`;
