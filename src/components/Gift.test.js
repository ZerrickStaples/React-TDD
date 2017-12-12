import React from 'react';
import { shallow } from 'enzyme';
import Gift from '../components/Gift';

describe("Gift", () => {
    const gift = shallow(<Gift />);

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
});