import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';
import { Button } from 'components'

const themeKeys = ['primary', 'info', 'success', 'warn', 'danger']
const sizes = ['xs', 'sm', 'md', 'lg']

storiesOf('Button', module).add('Button', () => <div>
        <table>
            <thead>
                {sizes.map(size => (<th>{size}</th>))}
                <th>default</th>
            </thead>
            <tbody>
                {themeKeys.map(key => {
                    const props = {[key]: true}
                    return (<tr key={key}>
                        {sizes.map(size => {
                            const props = {[key]: true, [size]: true}
                            return (<td key={size}><Button {...props} >{key}</Button></td>)})}
                        <td><Button {...props}>{key}</Button></td>
                    </tr>)}
                )}
            </tbody>
        </table>
    </div>)
