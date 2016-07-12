import { extendObservable } from 'mobx';


let __id = 1;

class LogsStore {
  /**
    constructor
    constructor({socket})
    => 소켓 오브젝트에 명령을 하겠다는 거겠쥥
  */
  constructor({socket}){
    this.socket = socket;
    extendObservable(this, {
      logs: [{
        id: __id,
        msg: 'Hello, this is a text',
        lvl: 'info',
        ts: 1468310314365
      }]
    });

    this.socket.on(
      'newLog',
      newLog => this.logs.unshift({...newLog, id: __id++ })
    );
    this.fetchLogs();
  }

  fetchLogs(){
    fetch('api/logs').then(r => r.json()).then(newLogs => {
      this.logs = newLogs;
    });
  }
}

export default new LogsStore({socket: window.socket});
