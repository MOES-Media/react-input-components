import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { RadioGroup, Radio } from 'components'

export default () => {
    const themeKeys = ['primary', 'info', 'success', 'warn', 'danger'] 

    return(<div><RadioGroup>
        <Radio.Choice label="test" value="test" />
        <Radio.Choice label="test2" value="test2" />
    </RadioGroup>
    <RadioGroup disabled>
        <Radio.Choice label="test" value="test" />
    </RadioGroup></div>)
}