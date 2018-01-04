import React from 'react'
import { mount } from 'enzyme'
import Input from '../../components/Input'

describe('Input', () => {
    const renderComponent = (props) => mount(<Input {...props} />)

    it('should render the component', () => {
        const renderedComponent = renderComponent({})
        expect(renderedComponent).toBePresent()
    })
})