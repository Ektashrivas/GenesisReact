import {shallow} from 'enzyme';
import General1 from '../Genesis/General1';
describe("when the user clicks button",()=>{
    it("when the correct buttton is clicked",()=>{
        const onButtonClickMock=jest.fn();
        //this will ceate a mock function called buttonclickmock

        const wrapper=shallow(<General1 onButtonClick={onButtonClickMock}/>,);
const buttonElement=wrapper.find("#a");
buttonElement.simulate("click");
expect(onButtonClickMock).toHaveBeenCalledTimes(1);
expect(onButtonClickMock).toHaveBeenCalledWith(true);
    });
});