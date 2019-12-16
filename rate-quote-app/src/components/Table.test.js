import React from "react";
import { Table } from "./Table";
import { configure, shallow, mount }  from "enzyme";
import { expect } from "chai";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Table component", function() {
	it("should render one table element", function() {
	 	const wrapper = shallow(<Table />);
	 	expect(wrapper.find('table')).to.have.length(1);
	});
});