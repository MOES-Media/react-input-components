import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Checkbox } from 'components'

export default () => {
    const themeKeys = ['primary', 'info', 'success', 'warn', 'danger']
    return(<div>
        <h4>Default</h4>
        <Checkbox label="default Checkbox" onChange={action('checked')}/>&nbsp;<Checkbox disabled label="disabled Checkbox"/>
        <div>
            <Checkbox block label="default block Checkbox" onChange={action('checked')}/>
            <Checkbox block label="default block Checkbox" onChange={action('checked')}/>
        </div>
        <h4>Themed</h4>
        <table>
            <thead>
                <tr>
                    <th>
                        default
                    </th>
                    <th>
                        disabled
                    </th>
                    <th>
                        checked
                    </th>
                </tr>
            </thead>
            <tbody>
                {themeKeys.map(key => {
                    const props = {[key]: true}
                    return (<tr key={key}>
                        <td><Checkbox {...props} label={`${key} checkbox`} onChange={action('checked')}/></td>
                        <td><Checkbox disabled {...props} label={`${key} checkbox disabled`} onChange={action('checked')}/></td>
                        <td><Checkbox checked {...props} label={`${key} checkbox`} onChange={action('checked')}/></td>
                    </tr>)})}
            </tbody>
        </table>
    </div>)
}
