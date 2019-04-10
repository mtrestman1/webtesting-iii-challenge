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
        
        const { getByText } = render(<Display closed={true} />)
        const closed = getByText(/closed/i)
        expect(closed).toHaveClass('led red-led')
       
    })

    it('should display red when locked', () => {
        const { getByText } = render(<Display closed={true} locked={true} />)
        const locked = getByText(/locked/i)
        expect(locked).toHaveClass('led red-led')
    })

    it('should display closed if true', () => {
        const { getByText } = render(<Display closed={false} />)
        const displayClosed = getByText(/closed/i)
        expect(displayClosed).toBeInTheDocument()
    })

    it('should display locked if true otherwise unlocked', () => {
        const { getByTestId } = render(<Display locked={true} />)
        const displayClosed = getByTestId('lock-display')
        expect(displayClosed).toHaveTextContent('Locked')
    })

    it('should display unlocked if locked is false', () => {
        const { getByText } = render(<Display locked={false} />)
        const displayUnlocked = getByText(/unlocked/i)
        expect(displayUnlocked).toBeInTheDocument()
    })

    it('should not be able to click open if closed and locked', () => {

    })

    it('should not be able to click lock if opened and unlocked', () => {

    })

    
})