import React from 'react'

import { storiesOf } from '@storybook/react'
import checkbox from './Checkbox'
import radio from './Radio'
import select from 'stories/Input/Select'
import textarea from 'stories/Input/Textarea'
import input from 'stories/Input/Input'

storiesOf('Input', module)
    .add('TextInput', input)
    .add('Checkbox', checkbox)
    .add('Radio', radio)
    .add('Select', select)
    .add('Textarea', textarea)