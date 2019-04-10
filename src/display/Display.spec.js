// Test away!
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
//import renderer from 'react-test-renderer';
import Display from './Display';
import 'jest-dom/extend-expect';

describe('<Display>', () => {

    it('should display opened and unlocked as the default properties', () => {

    })

    it('should display green when unlocked', () => {
        const { getByText } = render(<Display />)
        const unlocked = getByText(/unlocked/i)
        expect(unlocked).toHaveClass('led green-led')
    })

    it('should display green when opened', () => {
        const { getByText } = render(<Display />)
        const opened = getByText(/open/i)
        expect(opened).toHaveClass('led green-led')
    }) 

    it('should display red when closed', () => {
        
        const { getByText } = render(<Display />)
        const closed = getByText(/closed/i)
        expect(closed).toHaveClass('led red-led')
       
    })

    it('should display red when locked', () => {
        const { getByText } = render(<Display />)
        const locked = getByText(/locked/i)
        expect(locked).toHaveClass('led red-led')
    })

    it('should display closed if true otherwise open', () => {
        // const { getByText } = render(<Display />)
        // const displayClosed = getByText(/closed/i)
        // expect(displayClosed).toHaveClass('closed')
    })

    it('should display locked if true otherwise unlocked', () => {

    })

    it('should not be able to click open if closed and locked', () => {

    })

    it('should not be able to click lock if opened and unlocked', () => {

    })

    
})