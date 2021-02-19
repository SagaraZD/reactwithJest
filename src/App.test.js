import App from "./App" ;
import {configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16"

configure({adapter: new Adapter()});

describe("Testing my App", ()=>{

  test("Is app rendering", ()=>{
      const wrapper = shallow(<App/>);
      expect(wrapper.find(".App").length).toBe(1)
  });

  test("Is title showing", ()=>{
    const wrapper = shallow(<App/>);
    expect(wrapper.find("h1").text()).toContain("This is my React App");
  });

  test("render a button with text of `increment`", ()=>{
    const wrapper = shallow(<App/>);
    expect(wrapper.find("#increment-btn").text()).toBe("Increment");
  });

  test("render a button with text of `decrement`", ()=>{
    const wrapper = shallow(<App/>);
    expect(wrapper.find("#decrement-btn").text()).toBe("Decrement");
  });

  test("counter initial value should be 0", ()=>{
    const wrapper = shallow(<App/>);
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });

  test("render and simulate Increment click event", () => {
    const wrapper = shallow(<App/>);
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1")
  });

  test("render and simulate Decrement click event", () => {
    const wrapper = shallow(<App/>);
    wrapper.find("#increment-btn").simulate("click");
    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("0")
  });

});