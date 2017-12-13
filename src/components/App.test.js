import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe("Giftgiver application", () => {

    const app = shallow(<App />);
    
    it('renders correctly', () => {
        expect(app).toMatchSnapshot();
    });

    it('initializes the "state" with an empty list of gifts', () => {
        expect(app.state().gifts).toEqual([]);
    });

    describe("When clicking 'Add Gift' button", () => {

        beforeEach(() => {
            app.find('.btn-add').simulate('click');
        });

        afterEach(() => {
            app.setState({ gifts: []});
        });

        it('adds a new gift to state when button is pressed', () => {
            expect(app.state().gifts).toEqual([{ id: 1 }]);
        });
    
        it('adds a new gift to rendered list when button is pressed', () => {
            expect(app.find('.gift-list').children().length).toEqual(1);
        });

        it("creates a gift component", () => {
            expect(app.find('Gift').exists()).toBe(true);
        });

    });

    describe("and the user wants to remove the added gift", () =>{
        beforeEach(() => {
            app.instance().removeGift(id);
        });
        it("removes the gift from `state`", () => {
            expect(app.state().gifts).toEqual([]);
        });
    });
});