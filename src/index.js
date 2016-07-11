const html = `<!DOCTYPE html>
<html lang='en'>
<head>
  <meta charset="utf-8" />
  <title>cathy's logpipe</title>
</head>
<body> hello!
  <script src="/socket.io/socket.io.js"></script>
  <script>
    var socket = io('http://localhost:4000');
    socket.on('newLog', function (data) {
      console.log('i got a big log', data);
    });
  </script>
</body>
</html>
`;

export default function view() {
  return html;
}
