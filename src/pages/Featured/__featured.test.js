import React from "react";

import { configure, shallow } from "enzyme";

import Adapter from "enzyme-adapter-react-16";

import Featured from "./Featured";

configure({ adapter: new Adapter() });

describe("<Featured/>", () => {
  it("should render Featured component", () => {
    const wrapper = shallow(<Featured />);
    expect(wrapper);
  });
});
