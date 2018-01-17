import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button } from 'components'

const themeKeys = ['primary', 'info', 'success', 'warn', 'danger']
const sizes = ['xs', 'sm', 'md', 'lg']

storiesOf('Button', module).add('Button', () => <div>
        <table>
            <thead>
                <tr>
                {sizes.map(size => (<th key={size}>{size}</th>))}
                <th>default</th>
                <th>disabled</th>
                <th width="10%">block</th>
                </tr>
            </thead>
            <tbody>
                {themeKeys.map(key => {
                    const props = {[key]: true}
                    return (<tr key={key}>
                        {sizes.map(size => {
                            const props = {[key]: true, [size]: true}
                            return (<td key={`${key}_${size}`}><Button {...props} onClick={action('clicked')}>{key}</Button></td>)})}
                        <td><Button {...props} onClick={action('clicked')}>{key}</Button></td>
                        <td><Button {...props} disabled onClick={action('clicked')}>{key}</Button></td>
                        <td><Button {...props} block onClick={action('clicked')}>{key}</Button></td>
                    </tr>)}
                )}
                <tr>
                    {sizes.map(size => {
                        const props = {[size]: true}
                        return (<td key={size}><Button {...props} onClick={action('clicked')}>default</Button></td>)
                    })}
                    <td><Button onClick={action('clicked')}>default</Button></td>
                    <td><Button disabled onClick={action('clicked')}>default</Button></td>
                    <td><Button block onClick={action('clicked')}>default</Button></td>
                </tr>
            </tbody>
        </table>
    </div>)
