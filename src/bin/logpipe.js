import createServer from '../lib/createServer';

const PORT = 4321;

createServer({
  port: PORT
}).then(() => {
  console.info('logpipe Server started on port', PORT);
});
