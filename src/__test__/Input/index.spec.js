import React from 'react'
import { mount } from 'enzyme'
import Input from '../../components/Input'

describe('Input', () => {
    const themeable = {text: {inputText: '#d4d4d4'}}
    const renderComponent = (props) => mount(<Input themeable={themeable} {...props} />)

    it('should render the component', () => {
        const renderedComponent = renderComponent({})
        expect(renderedComponent).toBePresent()
    })

    it('should call the onChange function', () => {
        const mockFunctions = {onChange: () => ({})}
        spyOn(mockFunctions, 'onChange')
        const renderedComponent = renderComponent({onChange: mockFunctions.onChange})
        renderedComponent.simulate('change',{target:{value: 'test'}})
        expect(mockFunctions.onChange).toHaveBeenCalled()
        expect(mockFunctions.onChange).toHaveBeenCalledWith('test')
    })
})