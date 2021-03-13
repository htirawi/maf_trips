import React from "react";
import { shallow } from "enzyme";
import Content from "../../../src/components/Content/Content";

describe("<Content/> component should render successfully", () => {
    it("should render the component", () => {
        const wrapper = shallow(<Content />);
        expect(wrapper).toHaveLength(1);
    });
});
