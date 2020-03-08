import React from 'react';
import { shallow } from 'enzyme';
import DaysToSummer from './DaysToSummer';

const select = {
  title: '.title',
};

const mockProps = {
  title: 'Lorem Ipsum',
};

describe('Component HappyHourAd', () => {
  it('should render without crashing', () => {
    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();
  });
});

it('should render title', () => {
  const component = shallow(<DaysToSummer />);
  expect(component.exists(select.title)).toEqual(true);
});


const trueDate = Date;
const mockDate = customDate => class extends Date {
  constructor(...args) {
    if (args.length) {
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now() {
    return (new Date(customDate)).getTime();
  }
};

const checkDescriptionAtTime = (date, expectedDescription) => {
  it(`should show correct at ${date}`, () => {
    global.Date = mockDate(`${date}T12:00:00.135Z`);

    const component = shallow(<DaysToSummer {...mockProps} />);
    const renderedTime = component.find(select.title).text();
    expect(renderedTime).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};

describe('Component HappyHourAd with mocked Date', () => {
  checkDescriptionAtTime('2020-03-12', '100 days to summer!');
  checkDescriptionAtTime('2020-06-20', '1 day to summer!');
  checkDescriptionAtTime('2020-07-11', '');
  checkDescriptionAtTime('2020-08-20', '');
  checkDescriptionAtTime('2020-09-24', '270 days to summer!');
});

