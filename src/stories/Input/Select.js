import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Select, SelectOption } from 'components'

export default () => {
    const themeKeys = ['primary', 'info', 'success', 'warn', 'danger'] 
    const options = [{value: 'test', label: 'test'}, {value: 'test2', label: 'test 2'}]
    
    return(<div>
        <h4>Default</h4>
        <Select placeholder='default select' 
            options={options} onChange={action('select')} 
            withEmptyOption/>&nbsp;
        <Select placeholder='default disabled select' 
            disabled
            options={options} onChange={action('select')} 
            withEmptyOption/>
        <p><Select placeholder='default block select' 
            block
            options={options} onChange={action('select')} 
            withEmptyOption/></p>
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
                                <td>
                                    <Select {...props} placeholder='default select' 
                                        options={options} onChange={action('select')} 
                                        withEmptyOption/>
                                </td>
                                <td>
                                    <Select disabled {...props} placeholder='default select' 
                                        options={options} onChange={action('select')} 
                                        withEmptyOption/>
                                </td>
                            </tr>
                })}
            </tbody>
        </table>
    </div>)
}