const html = `<!DOCTYPE html>
<html lang='en'>
<head>
  <meta charset="utf-8" />
  <title>cathy's logpipe</title>
</head>
<body>
  <div id='app' />
  <script src="/socket.io/socket.io.js"></script>
  <script>
    window.socket = io();
  </script>
  <script src="/bundle.js"></script>
</body>
</html>
`;

export default function view() {
  return html;
}
