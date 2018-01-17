import React from 'react'
import RadioGroup from 'components/Radio'
import * as Radio from 'components/Radio'
import {mount} from 'enzyme'

describe('Radio', () => {
    const themeable = {colors: {active: '#fff', default: '#000'}}
    const renderComponent = (props, choiceProps) => mount(<RadioGroup themeable={themeable} {...props}><Radio.Choice {...choiceProps}/></RadioGroup>)
    const renderedChoiceComponent = (props) => mount(<Radio.Choice themeable={themeable} {...props} />)

    it('should render', () => {
        const renderedComponent = renderComponent({},{label: "test", value:"test"})
        expect(renderedComponent).toBePresent()
        const renderedDisabledComponent = renderComponent({disabled: true},{label: "test", value:"test"})
        expect(renderedDisabledComponent).toBePresent()
        const renderedBlockComponent = renderComponent({block: true},{label: "test", value:"test"})
        expect(renderedBlockComponent).toBePresent()
        const renderedMultipleChoiceComponetnt = mount(<RadioGroup themeable={themeable}><Radio.Choice label="test" value="test"/><Radio.Choice label="test2" value="test2"/></RadioGroup>)
        expect(renderedMultipleChoiceComponetnt).toBePresent()
    })

    it('should handle focus events', () => {
        const renderedComponent = renderedChoiceComponent({label: "test", value:"test", selectedValue:"test"})
        expect(renderedComponent.state().focus).toBe(false)
        expect(renderedComponent.state().touched).toBe(false)
        renderedComponent.find('label').simulate('focus')
        expect(renderedComponent.state().focus).toBe(true)
        expect(renderedComponent.state().touched).toBe(true)
    })

    it('should handle the blur event', () => {
        const renderedComponent = renderedChoiceComponent({label: "test", value:"test"})
        renderedComponent.find('label').simulate('focus')
        expect(renderedComponent.state().focus).toBe(true)
        expect(renderedComponent.state().touched).toBe(true)
        renderedComponent.find('label').simulate('blur')
        expect(renderedComponent.state().focus).toBe(false)
        expect(renderedComponent.state().touched).toBe(true)
    })

    it('should handle the onClick event', () => {
        const renderedComponent = renderComponent({},{label: "test", value:"test"})
        expect(renderedComponent.state().value).toBe(false)
        renderedComponent.find('label').simulate('click')
        expect(renderedComponent.state().value).toBe("test")
    })

    it('should handle the change event', () => {
        const mockFunctions = {onChange: () => ({})}
        spyOn(mockFunctions, 'onChange')
        const renderedComponent = renderComponent({onChange: mockFunctions.onChange},{label: "test", value:"test"})
        renderedComponent.find('label').simulate('click')
        expect(mockFunctions.onChange).toHaveBeenCalled()
        expect(mockFunctions.onChange).toHaveBeenCalledWith('test')
    })
})