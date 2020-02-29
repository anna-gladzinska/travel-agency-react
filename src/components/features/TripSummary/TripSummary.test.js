import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render correct url for link', () => {
    const expectedURL = 'abc';
    const component = shallow(<TripSummary id={expectedURL} tags={[]} />);

    expect(component.find('.link').prop('to')).toEqual(`/trip/${expectedURL}`);
  });

  it('should render correct src and alt for image', () => {
    const expectedSRC = 'image.jpg';
    const expectedALT = 'Lorem Ipsum';
    const component = shallow(<TripSummary image={expectedSRC} name={expectedALT} tags={[]} />);

    expect(component.find('img').prop('src')).toEqual(expectedSRC);
    expect(component.find('img').prop('alt')).toEqual(expectedALT);
  });

  it('should render correct name, cost, days props', () => {
    const component = shallow(<TripSummary name={'Lorem ipsum'} cost='1' days={1} tags={[]} />);
    expect(component).toBeTruthy();
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render tags without crashing', () => {
    const expectedTags = ['one', 'two', 'three'];
    const component = shallow(<TripSummary tags={expectedTags} />);

    expect(component.find('.tag').at(0)).toEqual[expectedTags[0]];
    expect(component.find('.tag').at(1)).toEqual[expectedTags[1]];
    expect(component.find('.tag').at(2)).toEqual[expectedTags[2]];
  });

  it('should require props tags to render div with class tags', () => {
    const component = shallow(<TripSummary tags={[]} />);
    expect(component.find('.tags').exists()).toBe(true);
  });
});
