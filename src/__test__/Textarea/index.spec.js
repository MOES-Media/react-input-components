import React from 'react'
import { mount } from 'enzyme'
import Textarea from 'components/Textarea'

describe('Input', () => {
    const themeable = {colors: {active: '#fff', default: '#000'}}
    const renderComponent = (props) => mount(<Textarea themeable={themeable} {...props} />)
    const sizes = ['short', 'long']

    it('should render the component', () => {
        const renderedComponent = renderComponent({})
        expect(renderedComponent).toBePresent()
        const renderedDisabledComponent = renderComponent({disabled: true})
        expect(renderedDisabledComponent).toBePresent()
        const renderedBlockComponent = renderComponent({block: true})
        expect(renderedBlockComponent).toBePresent()
    })

    it('should call the onChange function', () => {
        const mockFunctions = {onChange: () => ({})}
        spyOn(mockFunctions, 'onChange')
        const renderedComponent = renderComponent({onChange: mockFunctions.onChange})
        renderedComponent.simulate('change',{target:{value: 'test'}})
        expect(mockFunctions.onChange).toHaveBeenCalled()
        expect(mockFunctions.onChange).toHaveBeenCalledWith('test')
    })

    it('should handle the focus event', () => {
        const renderedComponent = renderComponent({})
        expect(renderedComponent.state().focus).toBe(false)
        expect(renderedComponent.state().touched).toBe(false)
        renderedComponent.simulate('focus')
        expect(renderedComponent.state().focus).toBe(true)
        expect(renderedComponent.state().touched).toBe(true)
    })

    it('should unset focus but leave touched alone on blur', () => {
        const renderedComponent = renderComponent({})
        renderedComponent.simulate('focus')
        expect(renderedComponent.state().focus).toBe(true)
        expect(renderedComponent.state().touched).toBe(true)
        renderedComponent.simulate('blur')
        expect(renderedComponent.state().focus).toBe(false)
        expect(renderedComponent.state().touched).toBe(true)
    })

    it('should render when one of the sizes is set', () => {
        sizes.map(size => {
            const renderedComponent = renderComponent({[size]: true})
            expect(renderedComponent).toBePresent()
        })
    })
})