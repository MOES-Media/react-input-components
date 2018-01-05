//@flow
import React from 'react'
import themeable from 'hoc/Themeable'
import {default as ButtonComponent} from 'components/Button'
import {default as Input} from 'components/Input'

const themedButton = themeable(ButtonComponent)
const themedInput = themeable(Input, false)

export {
    themedButton as Button,
    themedInput as Input,
}