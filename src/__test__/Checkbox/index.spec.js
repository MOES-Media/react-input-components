import React from 'react'
import Checkbox from 'components/Checkbox'
import {mount} from 'enzyme'

describe('Checkbox', () => {
    const themeable = {colors: {active: '#fff', default: '#000'}}
    const renderComponent = (props) => mount(<Checkbox themeable={themeable} {...props} />)

    it('should render', () => {
        const renderedComponent = renderComponent({label: "test"})
        expect(renderedComponent).toBePresent()
        const renderedDisabledComponent = renderComponent({label: "test", disabled: true})
        expect(renderedDisabledComponent).toBePresent()
        const renderedBlockComponent = renderComponent({label: "test", block: true})
        expect(renderedBlockComponent).toBePresent()
    })

    it('should handle focus events', () => {
        const renderedComponent = renderComponent({label: "test"})
        expect(renderedComponent.state().focus).toBe(false)
        expect(renderedComponent.state().touched).toBe(false)
        renderedComponent.simulate('focus')
        expect(renderedComponent.state().focus).toBe(true)
        expect(renderedComponent.state().touched).toBe(true)
    })

    it('should handle the blur event', () => {
        const renderedComponent = renderComponent({label: "test"})
        renderedComponent.simulate('focus')
        expect(renderedComponent.state().focus).toBe(true)
        expect(renderedComponent.state().touched).toBe(true)
        renderedComponent.simulate('blur')
        expect(renderedComponent.state().focus).toBe(false)
        expect(renderedComponent.state().touched).toBe(true)
    })

    it('should handle the onClick event', () => {
        const renderedComponent = renderComponent({label: "test"})
        expect(renderedComponent.state().value).toBe(false)
        renderedComponent.simulate('click')
        expect(renderedComponent.state().value).toBe(true)
    })

    it('should handle the change event', () => {
        const mockFunctions = {onChange: () => ({})}
        spyOn(mockFunctions, 'onChange')
        const renderedComponent = renderComponent({label: "test", onChange: mockFunctions.onChange})
        renderedComponent.find('input').simulate('change', {target: {value: true}})
        expect(mockFunctions.onChange).toHaveBeenCalled()
        expect(mockFunctions.onChange).toHaveBeenCalledWith(true)
    })
})