import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Select, SelectOption } from 'components'
import Tag from 'components/Select/Tag'

export default () => {
    const themeKeys = ['primary', 'info', 'success', 'warn', 'danger'] 
    const options = [{value: 'test', label: 'test'}, {value: 'test2', label: 'test 2'}]

    return(<div>
        <h4>Default</h4>
        <Select options={options}
            multiSelect/>
        <h5>SelectedValue Tag</h5>
        <Tag label="test" value="test" onClick={action('tagClicked')}/>
        </div>)
}