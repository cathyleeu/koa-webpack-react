import React from 'react';
import './App.styl';
import Header from './Components/Header/Header.jsx';
import LogsView from './Components/LogsView/LogsView.jsx';
import logs from './stores/LogsStore';

class App extends React.Component {
  render(){
    return (
      <div>
        <Header />
        <LogsView store={logs} />
      </div>
    );
  }
}

export default App;
