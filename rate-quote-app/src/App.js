import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import { HEADER_LABELS } from './constants';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Form />
        <table>
          <thead>
            <tr>
              {HEADER_LABELS.map((label, index) => <th key={index}>{label}</th>)}
            </tr>
          </thead>
          <tbody>
            <tr>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
