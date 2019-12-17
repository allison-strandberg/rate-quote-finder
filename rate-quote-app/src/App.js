import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Table from './components/Table';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Form />
        <div className="table-wrapper">
        	<Table />
        </div>
      </div>
    );
  }
}

export default App;
