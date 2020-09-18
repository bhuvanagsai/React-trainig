import React from "react";

import { configure, shallow } from "enzyme";

import Adapter from "enzyme-adapter-react-16";

import QuickConcepts from "./quickConcepts";

configure({ adapter: new Adapter() });

describe("<buttonNavigation/>", () => {
  it("should render buttonNavigation component", () => {
    const wrapper = shallow(<QuickConcepts />);
    expect(wrapper);
  });
});
