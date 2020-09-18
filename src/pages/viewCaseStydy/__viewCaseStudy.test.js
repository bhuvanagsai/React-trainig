import React from "react";

import { configure, shallow } from "enzyme";

import Adapter from "enzyme-adapter-react-16";

import ViewCaseStudy from "./viewCaseStudy";

configure({ adapter: new Adapter() });

describe("<ViewCaseStudy/>", () => {
  it("should render ViewCaseStudy component", () => {
    const wrapper = shallow(<ViewCaseStudy />);
    expect(wrapper);
  });
});
