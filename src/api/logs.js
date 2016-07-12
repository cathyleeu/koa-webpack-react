import takeWhile from 'lodash/takeWhile';
import safeNumber from '../util/safeNumber';
const logs = [];


function filterLogs(filter, logsToFilter) {

    //applies filter
    logsToFilter = takeWhile(
      logsToFilter,
      log => (
      log.ts >= filter.from
        && log.ts <= filter.to
        && log.msg.toUpperCase().indexOf(filter.q.toUpperCase()) > -1
      )
    );
    return logsToFilter;
}


/** gets all registered */
export function getLogs(ctx) {
  const q = ctx.request.query;
  const filter = {
    from: q.from ? safeNumber(q.from) : 0,
    to: q.to ? safeNumber(q.to) : 9999999999999,
    q: q.q || ''
  };

  console.log('filter', filter);
  ctx.ok(filterLogs(filter, logs));
}


/** adds a log entry */
export function addLog(ctx) {
  const body = ctx.request.body;
  if (!body){
    ctx.badRequest('its bad request');
    return;
  }
  const obj = {
    //message
    msg: body.msg || '',
    //timestamp
    ts: body.ts || Date.now(),
    // Severiry level.
    lvl: body.lvl || 'info',
    // Extra data.
    data: body.data
  };
  logs.unshift(ctx.request.body);

  //Avoid overhead by not sending back a body.
  ctx.status = 201;

  ctx.io.emit('newLog', obj);
}


/**
sets up routes.
*/

export default function (router) {
  router
    .get(
      '/api/logs',
      getLogs
    )
    .post(
      '/api/logs',
      addLog
    );
}
