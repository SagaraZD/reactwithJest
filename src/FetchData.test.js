import FetchData from "./FetchData";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });


describe("Testing fetch data", ()=>{

    let mockState = {
        error:null,
        isLoaded:true,
        items:[
            {
                id:1,
                name:'Jhon',
                username:"jhon",
                email:'',
                address:{},

            }
        ]

    }

test("Click and check the data", ()=>{
    jest.resetAllMocks();
    const wrapper = shallow(<FetchData/>);
    wrapper.setState({...mockState});
    wrapper.find("#fetch-btn").simulate("click");
    expect(wrapper.find(".name").text()).toContain("Jhon");
})

})