import React from 'react'
import { mount } from 'enzyme'
import themeable from '../../hoc/Themeable'

describe('Themeable HOC', () => {
    const MockComponent = (class extends React.Component{
        render(){
            return(<div>Test</div>)
        }
    })
    const ThemeableComponent = themeable(MockComponent)
    const ThemeableComponentNoOverrideDefaults = themeable(MockComponent, false)
    const keys = ['primary', 'info', 'success', 'warn', 'danger']

    it('should render a component when theme property is passed', () => {
        keys.map(key => {
            const props = {[key]: true}
            const renderedHoc = mount(<ThemeableComponent {...props} />)
            return expect(renderedHoc).toBePresent()
        })
        expect(mount(<ThemeableComponent />)).toBePresent()
        expect(mount(<ThemeableComponentNoOverrideDefaults />)).toBePresent()
    })
})