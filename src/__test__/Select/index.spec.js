import React from 'react'
import { mount } from 'enzyme'
import Select from 'components/Select'
import {Select as ThemedSelect} from 'components'

describe('Select', () => {
    const themeable = {colors: {active: '#fff', default: '#000'}}
    const renderComponent = (props) => mount(<Select themeable={themeable} {...props} />)
    const options = [{value: 'test', label: 'test'}, {value: 'test2', label: 'test 2'}]

    it('should render', () => {
        const renderedComponent = renderComponent({options})
        expect(renderedComponent).toBePresent()
        const renderedDisabledComponent = renderComponent({options, disabled: true})
        expect(renderedDisabledComponent).toBePresent()
        const renderedBlockComponent = renderComponent({options, block: true})
        expect(renderedBlockComponent).toBePresent()
        const renderedComponentWithEmptyOption = renderComponent({options, withEmptyOption: true})
        expect(renderedComponentWithEmptyOption).toBePresent()
        expect(mount(<ThemedSelect primary options={options}/>)).toBePresent()
    })

    it('should handle the focus event', () => {
        const renderedComponent = renderComponent({options})
        expect(renderedComponent.state().focus).toBe(false)
        expect(renderedComponent.state().touched).toBe(false)
        expect(renderedComponent.state().isOpen).toBe(false)
        renderedComponent.simulate('focus')
        expect(renderedComponent.state().focus).toBe(true)
        expect(renderedComponent.state().touched).toBe(true)
        expect(renderedComponent.state().isOpen).toBe(true)
    })

    it('should handle the blur event', () => {
        const renderedComponent = renderComponent({options})
        renderedComponent.simulate('focus')
        expect(renderedComponent.state().focus).toBe(true)
        expect(renderedComponent.state().touched).toBe(true)
        expect(renderedComponent.state().isOpen).toBe(true)
        renderedComponent.simulate('blur')
        expect(renderedComponent.state().focus).toBe(false)
        expect(renderedComponent.state().touched).toBe(true)
        expect(renderedComponent.state().isOpen).toBe(false)
    })

    it('should handle the chevron click', () => {
        const renderedComponent = renderComponent({options})
        renderedComponent.simulate('focus')
        expect(renderedComponent.state().focus).toBe(true)
        expect(renderedComponent.state().touched).toBe(true)
        expect(renderedComponent.state().isOpen).toBe(true)
        renderedComponent.find('i').simulate('mousedown')
        expect(renderedComponent.state().focus).toBe(true)
        expect(renderedComponent.state().touched).toBe(true)
        expect(renderedComponent.state().isOpen).toBe(false)
    })

    it('should handle the option select', () => {
        const renderedComponent = renderComponent({options})
        renderedComponent.simulate('focus')
        expect(renderedComponent.state().value).toBe(undefined)
        expect(renderedComponent.state().isOpen).toBe(true)
        const option = renderedComponent.find('SelectOption').first()
        option.simulate('click')
        expect(renderedComponent.state().value).toBe('test')
        expect(renderedComponent.state().isOpen).toBe(false)
    })

})