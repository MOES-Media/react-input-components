//@flow
import React from 'react'

import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import 'stories/Theme'
import 'stories/Button'
import 'stories/Input'

addDecorator(story => {
    <div style={{fontFamily: 'Roboto, sans-serif;'}}>
        {story()}
    </div>
})