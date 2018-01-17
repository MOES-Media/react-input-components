import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Input } from 'components'
import checkbox from './Checkbox'
import radio from './Radio'
import select from 'stories/Input/Select'
import textarea from 'stories/Input/Textarea'

const themeKeys = ['primary', 'info', 'success', 'warn', 'danger']
const sizes = ['xs', 'sm', 'md', 'lg', 'huge', 'massive']

storiesOf('Input', module).add('Input', () => <div>
        <h4>Default</h4>
        <Input name="default-input" onChange={action('onChange')} placeholder="Default input" /> &nbsp;
        <Input name="default-disabled-input" onChange={action('onChange')} value="Default disabled input" disabled /> &nbsp;
        <div style={{width: '25%', display: 'inline-block'}}>
            <Input name="default-block-input" type="password" onChange={action('onChange')} placeholder="Default block input" block />
        </div>
        <h4>Themed</h4>
        <table>
            <thead>
                <tr>
                    <th>default</th>
                    <th>disabled</th>
                    <th>block</th>
                </tr>
            </thead>
            <tbody>
                {themeKeys.map(key => {
                    const props = {[key]: true}
                    return (<tr key={key}>
                        <td><Input name={`${key}-input`} placeholder={`${key} input`} {...props} onChange={action('onChange')} /></td>
                        <td><Input name={`${key}-input-disabled`} disabled placeholder={`${key} input`} {...props} onChange={action('onChange')} /></td>
                        <td><div style={{width :"200px"}}><Input name={`${key}-input-block`} block placeholder={`${key} input`} {...props} onChange={action('onChange')} /></div></td>
                    </tr>)
                })}
            </tbody>
        </table>
        <h4>Sizes</h4>
        {sizes.map(size => {
            const props = {[size]: true}
            return(<div key={size}><p><Input name={`${size}-input`} onChange={action('onChange')} placeholder={size} {...props} /></p></div>)
        })}
    </div>).add('Checkbox', checkbox)
        .add('Radio', radio)
        .add('Select', select)
        .add('Textarea', textarea)