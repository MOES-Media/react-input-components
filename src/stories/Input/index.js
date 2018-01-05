import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Input } from 'components'

storiesOf('Input', module).add('Input', () => <Input onChange={action('onChange')} />)