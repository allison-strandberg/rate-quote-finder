import React from 'react';
import { connect } from 'react-redux';
import { saveForm, fetchQuotes } from '../redux/actions';

export class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loanSize: "",
			propertyType: "SingleFamily",
			creditScore: "",
			occupancy: "Primary",
			formValid: false,
			touched: {
				loanSize: false,
				creditScore: false
			},
			valid: {
				loanSize: false,
				creditScore: false
			}
		};
	}

	handleInputChange = event => {
		this.setState({ [event.target.id]: event.target.value});
	};

	handleSubmit = event => {
		event.preventDefault();

		// FICO credit score maximum is 850, but API maximum is 800.
		// Coerce values above 800 to 800.
		const creditScore = Math.min(this.state.creditScore, 800);
		this.props.saveForm(this.state.loanSize,
							this.state.propertyType,
							creditScore,
							this.state.occupancy
		);
		this.props.fetchQuotes(this.state.loanSize,
							this.state.propertyType,
							creditScore,
							this.state.occupancy
		);
	};

	validField = (field = "", value = "") => {
		switch (field) {
			case "loanSize":
				return (parseInt(value)) ? true : false
				break
			case "creditScore":
				return ((parseInt(value) >= 300) && 
						(parseInt(value) <= 850)) ? true : false
				break
			default:
				return true
		}
	}

	handleBlur = (field) => (event) => {
		// Touched is true on blur from a field.
		this.setState({
			touched: { ...this.state.touched, [field]: true },
		});
		// Check if field is valid, then check if form is valid.
		this.setState({
			valid: { 
				...this.state.valid, 
				[field]: this.validField(field, this.state[field]) 
			},
		}, function() {
			this.setState({
				formValid: Object.keys(
					this.state.valid).every(key => this.state.valid[key]
				)
			});
		});
	};

	render() {
		return (
			<form>
				<label htmlFor="loan-size">Loan Size</label>
				<input 
					id="loanSize" 
					type="text"
					value={this.state.loanSize} 
					onChange={this.handleInputChange}
					onBlur={this.handleBlur("loanSize")}
					className={
						(!this.state.valid.loanSize && 
							this.state.touched.loanSize)
							? "input-invalid"
							: "input-valid"
					}
				/>
				<label htmlFor="property-type">Property Type</label>
				<select 
					id="propertyType"
					value={this.state.propertyType}
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
					value={this.state.creditScore}
					onChange={this.handleInputChange}
					onBlur={this.handleBlur("creditScore")}
					className={
						(!this.state.valid.creditScore && 
							this.state.touched.creditScore)
							? "input-invalid"
							: "input-valid"
					}
				/>
				<label htmlFor="occupancy">Occupancy</label>
				<select 
					id="occupancy"
					value={this.state.occupancy}
					onChange={this.handleInputChange}
				>
					<option value="Primary">Primary</option>
					<option value="Secondary">Secondary</option>
					<option value="Investment">Investment</option>
				</select>
				<button 
					type="submit"
					disabled={!this.state.formValid}
					onClick={this.handleSubmit}
					className={this.state.formValid 
								? "btn-valid"
								: "btn-invalid"
					}
				>Quote Rates
				</button>
			</form>
		);
	}
}

export default connect(
	null,
	{ saveForm, fetchQuotes }
)(Form);

