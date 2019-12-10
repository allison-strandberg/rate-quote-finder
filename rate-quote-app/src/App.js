import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HEADER_LABELS } from './constants';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loanSize: null,
      propertyType: "SingleFamily",
      creditScore: null,
      occupancy: "Primary",
    }
  }

  handleInputChange = event => {
    this.setState({ [event.target.id]: event.target.value});
  };

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <form>
          <label htmlFor="loan-size">Loan Size</label>
          <input 
            id="loanSize" 
            type="text" 
            onChange={this.handleInputChange} 
          />
          <label htmlFor="property-type">Property Type</label>
          <select 
            id="propertyType"
            onChange={this.handleInputChange}
          >
            <option value="SingleFamily">Single Family</option>
            <option value="Condo">Condo</option>
            <option value="Townhouse">Townhouse</option>
            <option value="MultiFamily">Multi Family</option>
          </select>
          <label htmlFor="credit-score">Credit Score</label>
          <input
            id="creditScore"
            type="text"
            onChange={this.handleInputChange}
          />
          <label htmlFor="occupancy">Occupancy</label>
          <select 
            id="occupancy"
            onChange={this.handleInputChange}
          >
            <option value="Primary">Primary</option>
            <option value="Secondary">Secondary</option>
            <option value="Investment">Investment</option>
          </select>
          <button 
            type="submit" 
            onClick={this.handleSubmit}
          >Quote Rates
          </button>
        </form>
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
