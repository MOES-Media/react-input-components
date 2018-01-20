import React from 'react'
import { mount } from 'enzyme'
import withButton from 'hoc/WithButton'
import {Input} from 'components'

describe('WithButton', () => {

    const theme = {colors: {active: '#fff', default: '#fff'}, text:{buttonText: '#fff'}}
    const InputWithButton = withButton(Input)
    const renderInputWithButton = (props) => mount(<InputWithButton themeable={theme} {...props} />)

    it('should render', () => {
        expect(renderInputWithButton({})).toBePresent()
        expect(renderInputWithButton({block: true})).toBePresent()
        expect(renderInputWithButton({disabled: true})).toBePresent()
    })

    it('should pass the onchange function to the input', () => {
        const mockFunctions = {onChange: () => ({})}
        spyOn(mockFunctions, 'onChange')
        const renderedComponent = renderInputWithButton({onChange: mockFunctions.onChange})
        renderedComponent.find('input').simulate('change', {target: {value: 'test'}})
        expect(mockFunctions.onChange).toHaveBeenCalled()
        expect(mockFunctions.onChange).toHaveBeenCalledWith('test')
    })

    it('should trigger the onButtonClickFunction', () => {
        const mockFunctions = {onButtonClick: () => ({})}
        spyOn(mockFunctions, 'onButtonClick')
        const renderedComponent = renderInputWithButton({onButtonClick: mockFunctions.onButtonClick})
        renderedComponent.find('button').simulate('click')
        expect(mockFunctions.onButtonClick).toHaveBeenCalled()
    })
})