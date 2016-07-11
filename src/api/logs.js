const logs = [];

/** gets all registered */
export function getLogs(ctx) {
  ctx.ok(logs);
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
    msg: body.msg,
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
