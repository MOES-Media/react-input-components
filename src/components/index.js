//@flow
import themeable from 'hoc/Themeable'
import {default as ButtonComponent} from 'components/Button'
import {default as Input} from 'components/Input'
import {default as Checkbox} from 'components/Checkbox'
import {default as RadioGroup } from 'components/Radio'
import {default as Select } from 'components/Select'
import { default as Textarea } from 'components/Textarea'
import * as Radio from 'components/Radio'

const themedButton = themeable(ButtonComponent)
const themedInput = themeable(Input)
const themedCheckbox = themeable(Checkbox) 
const themedRadio = themeable(RadioGroup)
const themedSelect = themeable(Select)
const themedTextarea = themeable(Textarea)

export {
	themedButton as Button,
	themedInput as Input,
	themedCheckbox as Checkbox,
	themedRadio as RadioGroup,
	themedSelect as Select,
	themedTextarea as Textarea,
	Radio,
}