import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Textarea } from 'components'

export default () => {
    const themeKeys = ['primary', 'info', 'success', 'warn', 'danger'] 
    const sizes = ['short', 'long']

    return(<div>
        <h4>Default</h4>
        <Textarea onChange={action('onchange')} placeholder="default textarea"/>&nbsp;
        <Textarea onChange={action('onchange')} disabled placeholder="default disabled textarea"/>
        <p>
            <Textarea onChange={action('onchange')} block placeholder="default block textarea"/>
        </p>
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
                    return <tr index={key}>
                                <td><Textarea {...props} onChange={action('onchange')} placeholder={`${key} textarea`}/></td>
                                <td><Textarea {...props} onChange={action('onchange')} disabled placeholder={`${key} disabled textarea`}/></td>
                            </tr>})}
            </tbody>
        </table>
        <h4>Sizes</h4>
            {sizes.map(size => {
                const props = {[size]: true}
                return(<div key={size}><p><Textarea name={`${size}-input`} onChange={action('onChange')} placeholder={size} {...props} /></p>
                    <p><Textarea name={`${size}-input`} block onChange={action('onChange')} placeholder={`${size} block`} {...props} /></p></div>)
            })}
    </div>)
}