import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Checkbox } from 'components'

storiesOf('Input', module).add('Checkbox', () => <div>
        <h4>Default</h4>
        <Checkbox label="default Checkbox"/>&nbsp;<Checkbox disabled label="disabled Checkbox"/>
    </div>)
