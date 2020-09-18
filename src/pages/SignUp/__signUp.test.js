import React from "react";

import { configure, shallow } from "enzyme";

import Adapter from "enzyme-adapter-react-16";

import SignUp from "./signUp";

configure({ adapter: new Adapter() });

describe("<SignUp/>", () => {
  it("should render SignUp component", () => {
    const wrapper = shallow(<SignUp />);
    expect(wrapper);
  });
});
