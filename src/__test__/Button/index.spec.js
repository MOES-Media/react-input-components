
import React from 'react'
import { mount } from 'enzyme'
import Button from '../../components/Button'
import {Button as ThemeableButton} from '../../components'
import theme from 'theme'

describe('Button', () => {
    const renderComponent = (props) => mount(<Button themeable={{colors: theme.colors.default, text: theme.text.default}} {...props}>Test</Button>)
    const renderedThemeableComponent = (props) => mount(<ThemeableButton {...props}>Test Themeable</ThemeableButton>)

    it('should render the component', () => {
        const renderedComponent = renderComponent({disabled: true})
        expect(renderedComponent).toBePresent()
        const renderedThemeableButton = renderedThemeableComponent({primary: true})
        expect(renderedThemeableButton).toBePresent()
    })

    it('should set focus and touched when focused', () => {
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

    it('should fire the onClickHandler passed as prop', () => {
        const mockFunctions = {onClick: () => ({})}
        spyOn(mockFunctions, 'onClick')
        const renderedComponent = renderComponent({onClick: mockFunctions.onClick})
        renderedComponent.simulate('click')
        expect(mockFunctions.onClick).toHaveBeenCalled()
    })
})