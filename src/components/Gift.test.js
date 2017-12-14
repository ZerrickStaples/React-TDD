import React from 'react';
import { shallow } from 'enzyme';
import Gift from '../components/Gift';

describe("Gift", () => {
    const mockRemove = jest.fn();
    const id = 1;
    const props = { gift: { id }, removeGift: mockRemove } 
    const gift = shallow(<Gift {...props} />);

    it("renders properly", () =>{
        expect(gift).toMatchSnapshot();
    });

    it("intializes a person and present in `state`", () => {
        expect(gift.state()).toEqual({ person: '', present: ''});
    });

    describe("When typing into the person input", () => {
        const person = 'Uncle';

        beforeEach(() => { 
            gift.find('.input-person').simulate('change', { target: { value: 'Uncle', } });
        });
        it("updates the person in `state`", () => {
            expect(gift.state().person).toEqual(person);
        });
    });

    describe("When typing into the present input", () => {
        const present = '24K gold';

        beforeEach(()=>{
            gift.find('.input-present').simulate('change',{ target: { value:'24K gold', } })
        })
        it("updates the present in state", () => {
            expect(gift.state().present).toEqual(present);
        });
    });

    describe("when pressing the remove gift button", () => {
        beforeEach(() => {
            app.find('.btn-rmv').simulate('click');
        });
        it("calls the removeGift callback", () => {
            expect(mockRemove).toHaveBeenCalledWith(id);
        })
    }); 
});