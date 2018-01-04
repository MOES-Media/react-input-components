//@flow
import themeable from 'hoc/Themeable'
import {default as ButtonComponent} from 'components/Button'
import {default as Input} from 'components/Input'

const themedButton = themeable(ButtonComponent)

export {
    themedButton as Button,
    Input
}