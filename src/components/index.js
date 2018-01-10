//@flow
import themeable from 'hoc/Themeable'
import {default as ButtonComponent} from 'components/Button'
import {default as Input} from 'components/Input'
import {default as Checkbox} from 'components/Checkbox'
import {default as RadioGroup } from 'components/Radio'
import * as Radio from 'components/Radio'

const themedButton = themeable(ButtonComponent)
const themedInput = themeable(Input, false)
const themedCheckbox = themeable(Checkbox) 
const themedRadio = themeable(RadioGroup)

export {
    themedButton as Button,
    themedInput as Input,
    themedCheckbox as Checkbox,
    themedRadio as RadioGroup,
    Radio
}