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
});