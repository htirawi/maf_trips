import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { shallow } from "enzyme";
import Header from "../../../src/components/Header/Header";
import Main from "../../../src/components/Main/Main";
import toJson from "enzyme-to-json";

afterEach(cleanup);

describe("<Header/> component should render successfully", () => {
    it("should render the component", () => {
        const wrapper = shallow(<Header />);
        expect(wrapper).toHaveLength(1);
    });
});

it("<Header/> renders without crashing given the required props", () => {
    const props = {
        isShowEle: false,
    };
    const wrapper = shallow(<Header {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
});
