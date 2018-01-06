//@flow
import themeable from 'hoc/Themeable'
import {default as ButtonComponent} from 'components/Button'
import {default as Input} from 'components/Input'
import {default as Checkbox} from 'components/Checkbox'

const themedButton = themeable(ButtonComponent)
const themedInput = themeable(Input, false)
const themedCheckbox = themeable(Checkbox)

export {
    themedButton as Button,
    themedInput as Input,
    themedCheckbox as Checkbox
}