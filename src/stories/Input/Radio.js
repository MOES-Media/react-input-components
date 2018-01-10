import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { RadioGroup, Radio } from 'components'

export default () => {
    const themeKeys = ['primary', 'info', 'success', 'warn', 'danger'] 

    return(<div>
            <h4>Default</h4>
            <RadioGroup>
                <Radio.Choice label="default radio choice" value="test" />
                <Radio.Choice label="default radio choice 2" value="test2" />
            </RadioGroup>
            <RadioGroup disabled>
                <Radio.Choice label="default disabled radio choice" value="test" />
            </RadioGroup>
            <RadioGroup block>
                <Radio.Choice label="default block radio choice" value="test-block" />
                <Radio.Choice label="default block radio choice 2" value="test-block-2" />
            </RadioGroup>
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
                        <td width="50%"><RadioGroup {...props}><Radio.Choice {...props} value={key} label={`${key} radio`}/></RadioGroup></td>
                        <td width="50%"><RadioGroup disabled {...props}><Radio.Choice {...props} value={key} label={`${key} radio`}/></RadioGroup></td>
                    </tr>)})}
            </tbody>
        </table>
        </div>)
}