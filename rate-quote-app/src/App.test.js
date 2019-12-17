import React from 'react';
import App from './App';
import { configure, shallow, mount }  from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App component', function() {
	it('should render two div elements', function() {
	 	const wrapper = shallow(<App/>);
	 	expect(wrapper.find('div')).to.have.length(2);
	});
});
