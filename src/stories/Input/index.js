import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Input } from 'components'

const themeKeys = ['primary', 'info', 'success', 'warn', 'danger']

storiesOf('Input', module).add('Input', () => <div>
        <h4>Default</h4>
        <Input name="default-input" onChange={action('onChange')} placeholder="Default input" /> &nbsp;
        <Input name="default-disabled-input" onChange={action('onChange')} value="Default disabled input" disabled /> &nbsp;
        <div style={{width: '25%', display: 'inline-block'}}>
            <Input name="default-block-input" onChange={action('onChange')} placeholder="Default block input" block />
        </div>
        <h4>Themed</h4>
        <table>
            <thead>
                <th>default</th>
                <th>disabled</th>
                <th>block</th>
            </thead>
            <tbody>
                {themeKeys.map(key => {
                    const props = {[key]: true}
                    return (<tr key={key}>
                        <td><Input name={`${key}-input`} placeholder={`${key} input`} {...props} onChange={action('onChange')} /></td>
                        <td><Input name={`${key}-input`} disabled placeholder={`${key} input`} {...props} onChange={action('onChange')} /></td>
                        <td><div style={{width :"200px"}}><Input name={`${key}-input`} block placeholder={`${key} input`} {...props} onChange={action('onChange')} /></div></td>
                    </tr>)
                })}
            </tbody>
        </table>
    </div>)