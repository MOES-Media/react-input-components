import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';
import { Button } from 'components'

storiesOf('Button', module).add('Button', () => <div>
        <Button onClick={action('clicked')} primary >Hello Button!</Button>
        <Button onClick={action('clicked')}>Hello Button!</Button>
    </div>)
