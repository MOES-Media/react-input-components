import React from 'react'
import { action } from '@storybook/addon-actions'
import { Input, InputButtonGroup } from 'components'

const themeKeys = ['primary', 'info', 'success', 'warn', 'danger']
const sizes = ['xs', 'sm', 'md', 'lg', 'huge', 'massive']

export default () => (<div>
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
    <h4>InputButtonGroup</h4>
    <InputButtonGroup placeholder="Default with button" buttonContent="Btn"/>&nbsp;<InputButtonGroup placeholder="Disabled with button" disabled buttonContent="Btn"/>
    <p>
        <InputButtonGroup placeholder="Block with button" block noBackground buttonContent="Btn"/>
    </p>
    </div>)