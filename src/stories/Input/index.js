import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Input } from 'components'

storiesOf('Input', module).add('Input', () => <div>
        <h4>Default</h4>
        <Input name="default-input" onChange={action('onChange')} placeholder="Default input" /> &nbsp;
        <Input name="default-disabled-input" onChange={action('onChange')} value="Default disabled input" disabled />
        <h4>Themed</h4>

    </div>)