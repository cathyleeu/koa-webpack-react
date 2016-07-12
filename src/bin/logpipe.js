import createServer from '../lib/createServer';

const PORT = 4000;

createServer({
  port: PORT
}).then(() => {
  console.info('logpipe Server started on port', PORT);
}, err => {
  console.error('Could not start Logpipe:');
  console.error(err);
});
