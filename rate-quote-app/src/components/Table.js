import React from "react";
import { HEADER_LABELS } from "../constants";

export const Table = (props) => (
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
);

export default Table;