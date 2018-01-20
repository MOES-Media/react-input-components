import React from 'react'
import { action } from '@storybook/addon-actions'
import { InputButtonGroup } from 'components'

const themeKeys = ['primary', 'info', 'success', 'warn', 'danger']
const sizes = ['xs', 'sm', 'md', 'lg', 'huge', 'massive']

export default () => (<div>
    <h4>Default</h4>
    <InputButtonGroup placeholder="Default with button" onChange={action('onInputChange')} onButtonClick={action('onButtonClick')} buttonContent="Btn"/>&nbsp;
    <InputButtonGroup placeholder="Disabled with button" onChange={action('onInputChange')} onButtonClick={action('onButtonClick')} disabled buttonContent="Btn"/>
    <p>
        <InputButtonGroup placeholder="Block with button" block noBackground onChange={action('onInputChange')} onButtonClick={action('onButtonClick')} buttonContent="Btn"/>
    </p>
    <h4>Themed</h4>
    <table>
        <thead>
            <tr>
                <th>default</th>
                <th>disabled</th>
            </tr>
        </thead>
        <tbody>
            {themeKeys.map(key => {
                const props = {[key]: true}
                return (<tr key={key}>
                    <td><InputButtonGroup name={`${key}-input`} placeholder={`${key} input`} {...props} onChange={action('onInputChange')} onButtonClick={action('onButtonClick')} buttonContent="Btn"/></td>
                    <td><InputButtonGroup name={`${key}-input-disabled`} disabled placeholder={`${key} input`} {...props} onChange={action('onInputChange')} onButtonClick={action('onButtonClick')} buttonContent="Btn"/></td>
                </tr>)
            })}
        </tbody>
    </table>
</div>)