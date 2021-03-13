import React from "react";
import { shallow } from "enzyme";
import Footer from "../../../src/components/Footer/Footer";

describe("<Footer/> component should render successfully", () => {
    it("should render the component", () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper).toHaveLength(1);
    });
});
