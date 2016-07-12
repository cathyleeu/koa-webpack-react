import React from 'react';
import styles from './LogsView.styl';
import { observer } from 'mobx-react';
import LogEntry from '../LogEntry/LogEntry.jsx';

export const LogsView = ({store}) => (
  <div className={styles.container}>
    {store.logs.map(log =>
      <LogEntry log={log} key={log.id} />
    )}
  </div>
);

export default observer(LogsView);
