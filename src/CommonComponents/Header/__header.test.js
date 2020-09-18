import React from "react";

import { configure, shallow } from "enzyme";

import Adapter from "enzyme-adapter-react-16";

import Header from "./Header";

configure({ adapter: new Adapter() });

describe("<Header/>", () => {
  it("should render Header component", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper);
  });
});
