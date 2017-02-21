import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import Signup from './index';


describe('<Signup />', () => {

  it('renders correctly', () => {
    const wrapper = shallow(<Signup />);
    expect(wrapper).to.have.lengthOf(1);
  });

  it('has a form', () => {
    const wrapper = mount(<Signup />);
    const form = wrapper.find('.form');

    expect(wrapper.children(), 'child contents not found').to.not.be.empty;
    expect(form, 'form not found').to.have.lengthOf(1);
  });

  it('has a dismiss button', () => {
    const wrapper = mount(<Signup />);
    const dismiss = wrapper.find('.btn--dismiss');

    expect(dismiss, 'dismiss button not found').to.have.lengthOf(1);
  });
});