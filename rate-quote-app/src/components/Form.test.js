import React from 'react';
import Form from './Form';
import { configure, shallow }  from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Form component', () => {
	it('should render two input elements', function() {
		const wrapper = shallow(<Form/>);
		expect(wrapper.find('input')).to.have.length(2);
	});

	it('should render two select elements', function() {
		const wrapper = shallow(<Form/>);
		expect(wrapper.find('select')).to.have.length(2);
	});

	it('should render one button element', function() {
	 	const wrapper = shallow(<Form/>);
	 	expect(wrapper.find('button')).to.have.length(1);
	});

	it('should have an initial state of loan size of null', function() {
	 	const wrapper = shallow(<Form/>);
	 	expect(wrapper.instance().state.loanSize).to.be.null;
	});

	it('should have an initial state of credit score of null', function() {
	 	const wrapper = shallow(<Form/>);
	 	expect(wrapper.instance().state.creditScore).to.be.null;
	});

	it('should have an initial state of property type of "SingleFamily"', function() {
	 	const wrapper = shallow(<Form/>);
	 	expect(wrapper.instance().state.propertyType).to.equal('SingleFamily');
	});

	it('should have an initial state of occupancy of "Primary"', function() {
	 	const wrapper = shallow(<Form/>);
	 	expect(wrapper.instance().state.occupancy).to.equal('Primary');
	});

});
