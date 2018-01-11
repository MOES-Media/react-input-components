import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Select } from 'components'

export default () => {
    const themeKeys = ['primary', 'info', 'success', 'warn', 'danger'] 
    
    return(<Select placeholder='test'/>)
}