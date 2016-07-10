import Koa from 'koa';

/**
서버 생성
* @ param {number} opts.port
* @ return {promise}

*/
export default async function createServer(opts){
  const app = new Koa();

  
  app.listen(opts.port);
}
