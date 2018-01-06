import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Checkbox } from 'components'

export default () => {
    const themeKeys = ['primary', 'info', 'success', 'warn', 'danger']
    return(<div>
        <h4>Default</h4>
        <Checkbox label="default Checkbox"/>&nbsp;<Checkbox disabled label="disabled Checkbox"/>
        <div>
            <Checkbox block label="default block Checkbox"/>
            <Checkbox block label="default block Checkbox"/>
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
                </tr>
            </thead>
            <tbody>
                {themeKeys.map(key => {
                    const props = {[key]: true}
                    return (<tr key={key}>
                        <td width="50%"><Checkbox {...props} label={`${key} checkbox`}/></td>
                        <td width="50%"><Checkbox disabled {...props} label={`${key} checkbox disabled`}/></td>
                    </tr>)})}
            </tbody>
        </table>
    </div>)
}
