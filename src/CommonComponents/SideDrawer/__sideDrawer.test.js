import React from "react";

import { configure, shallow } from "enzyme";

import Adapter from "enzyme-adapter-react-16";

import SideDrawer from "./SideDrawer";

configure({ adapter: new Adapter() });

describe("<SideDrawer/>", () => {
  it("should render SideDrawer component", () => {
    const wrapper = shallow(<SideDrawer />);
    expect(wrapper);
  });
});
