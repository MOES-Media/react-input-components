//@flow
import themeable from 'hoc/Themeable'
import {default as ButtonComponent} from 'components/Button'

const themedButton = themeable(ButtonComponent)

export {
    themedButton as Button,
}