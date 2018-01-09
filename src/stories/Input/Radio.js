import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { RadioGroup, Radio } from 'components'

export default () => {
    const themeKeys = ['primary', 'info', 'success', 'warn', 'danger'] 

    return(<RadioGroup>
        <Radio.Choice label="test" value="test" />
    </RadioGroup>)
}