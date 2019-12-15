import React from 'react';
import { Form } from './Form';
import { configure, shallow, mount }  from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Form component', function() {
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
	 	expect(wrapper.instance().state.loanSize).to.equal("");
	});

	it('should have an initial state of credit score of null', function() {
	 	const wrapper = shallow(<Form/>);
	 	expect(wrapper.instance().state.creditScore).to.equal("");
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

describe('Directly invoking the validLoanSize method', function() {
	it('should return true for input 10000', function() {
		const wrapper = shallow(<Form/>);
		const instance = wrapper.instance();
		expect(instance.validLoanSize(10000)).to.be.true;
	});

	it('should return false for no input', function() {
		const wrapper = shallow(<Form/>);
		const instance = wrapper.instance();
		expect(instance.validLoanSize()).to.be.false;
	});

	it('should return false for input ""', function() {
		const wrapper = shallow(<Form/>);
		const instance = wrapper.instance();
		expect(instance.validLoanSize("")).to.be.false;
	});

	it('should return false for input "a million dollars"', function() {
		const wrapper = shallow(<Form/>);
		const instance = wrapper.instance();
		expect(instance.validLoanSize("a million dollars")).to.be.false;
	});
});

describe('Directly invoking the validCreditScore method', function() {
	it('should return true for input 300', function() {
		const wrapper = shallow(<Form/>);
		const instance = wrapper.instance();
		expect(instance.validCreditScore(300)).to.be.true;
	});

	it('should return true for input 850', function() {
		const wrapper = shallow(<Form/>);
		const instance = wrapper.instance();
		expect(instance.validCreditScore(850)).to.be.true;
	});

	it('should return false for input 299', function() {
		const wrapper = shallow(<Form/>);
		const instance = wrapper.instance();
		expect(instance.validCreditScore(299)).to.be.false;
	});

	it('should return false for input 851', function() {
		const wrapper = shallow(<Form/>);
		const instance = wrapper.instance();
		expect(instance.validCreditScore(851)).to.be.false;
	});
});