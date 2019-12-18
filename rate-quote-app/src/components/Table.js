import React from "react";
import { connect } from 'react-redux';
import { HEADER_LABELS, COLUMN_ORDER } from "../constants";

export class Table extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		if (this.props.isFetching) {
			return (
				<p className="spinner">Fetching quotes...</p>
			)
		} else if (this.props.didFail) {
			return (
				<p className="spinner">Failed to fetch quotes.</p>
			)
		} else {	
			return (
				<table>
					<thead>
						<tr>
							{HEADER_LABELS.map(
								(label, index) => <th key={index}>{label}</th>
							)}
						</tr>
					</thead>
					<tbody>
						{this.props.formattedTable.map(
							(row, rowIndex) => <tr key={rowIndex}>
							{row.map(
								(cell, cellIndex) => <td key={cellIndex}>{cell}</td>
							)}</tr>
						)}
					</tbody>
				</table>
			);
		};
	}
}

const mapStateToProps = state => {
	const { quotes } = state;
	// formattedTable is a 2d array of table rows.
    const formattedTable = quotes.rateQuotes.map(
    	row => COLUMN_ORDER.map(column => row[column])
    );
	return {
		formattedTable,
		isFetching: quotes.isFetching,
		didFail: quotes.didFail
	}
};

export default connect(mapStateToProps)(Table);