package.json에서 스크립트에서

<pre><code>
"scripts": {
  "dev": "nodemon src/bin/dev.js",
  "lint-watch": "esw -w src/ bin/"
}
</code></pre>

dev를 설정 해 주었지..

여기서 dev.js 는 logpipe.js와 babel-register를 require한다
logpipe.js는 createServer.js를 import하는데..

createServer는 Koa를 import하여
<pre><code>
export default async function createServer(opts){
  const app = new Koa();


  app.listen(opts.port);
}
<code><pre>
