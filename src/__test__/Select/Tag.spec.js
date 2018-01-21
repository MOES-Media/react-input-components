import React from 'react'
import { mount } from 'enzyme'
import Tag from 'components/Select/Tag'

describe('Tag', () => {

    const renderComponent = (props) => mount(<Tag {...props} />)

    it('should render', () => {
        expect(renderComponent({value: "test", label: "test", onClick: () => ({})})).toBePresent()
    })

    it('should bind the value to the onClick function', () => {
        const mockFunctions = {onClick: () => ({})}
        spyOn(mockFunctions, 'onClick')
        const renderedComponent = renderComponent({value: "test", label: "test 2", onClick: mockFunctions.onClick})
        renderedComponent.find('i').simulate('click')
        expect(mockFunctions.onClick).toHaveBeenCalled()
        expect(mockFunctions.onClick).toHaveBeenCalledWith("test", expect.anything())
    })
})