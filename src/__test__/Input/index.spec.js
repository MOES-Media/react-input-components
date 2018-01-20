import React from 'react'
import { mount } from 'enzyme'
import Input from '../../components/Input'
import {Input as ThemeableInput } from '../../components'

describe('Input', () => {
    const renderComponent = (props) => mount(<Input {...props} />)
    const renderThemeableComponent = (props) => mount(<ThemeableInput {...props} />)
    const sizes = ['xs', 'sm', 'md', 'lg', 'huge', 'massive']
    const keys = ['primary', 'info', 'success', 'warn', 'danger']

    it('should render the component', () => {
        const renderedComponent = renderComponent({})
        expect(renderedComponent).toBePresent()
        const renderedDisabledComponent = renderComponent({disabled: true})
        expect(renderedDisabledComponent).toBePresent()
        const renderedBlockComponent = renderComponent({block: true})
        expect(renderedBlockComponent).toBePresent()
        const renderedOffsetComponent = renderComponent({offsetRight: 75})
        expect(renderedOffsetComponent).toBePresent()
    })

    it('should call the onChange function', () => {
        const mockFunctions = {onChange: () => ({})}
        spyOn(mockFunctions, 'onChange')
        const renderedComponent = renderComponent({onChange: mockFunctions.onChange})
        renderedComponent.simulate('change',{target:{value: 'test'}})
        expect(mockFunctions.onChange).toHaveBeenCalled()
        expect(mockFunctions.onChange).toHaveBeenCalledWith('test')
    })

    it('should render when a theme props is set', () => {
        keys.map(key => {
            const renderedComponent = renderThemeableComponent({[key]: true})
            expect(renderedComponent).toBePresent()
        })
    })

    it('should set focus and touched when focused', () => {
        const renderedComponent = renderComponent({themeable: {colors: {active: '#fff', default: '#ddd'}}})
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