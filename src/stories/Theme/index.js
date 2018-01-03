//@flow
import React from 'react'
import styled from 'styled-components'

import { storiesOf } from '@storybook/react'
import theme from 'theme'

const ColorBlock = styled.div`
    width: 100%;
    min-height: 1em;
    display: inline-block;
    background: ${props => props.color};
    ${props => props.disabled && 'opacity: 0.35;'}
    text-align: center;
    font-family: Helvetica;
    padding: 6px;
`
console.log()

storiesOf('Theme', module)
    .add('Colors', () => <section><h3>Colors</h3>{
        Object.keys(theme.colors)
                .map(key => <div key={key}>
                        <h4>{key}</h4>
                        <ColorBlock color={theme.colors[key].default}>Default</ColorBlock>
                        <ColorBlock color={theme.colors[key].active}>Active</ColorBlock>
                        <ColorBlock color={theme.colors[key].default} disabled>Disabled</ColorBlock>
                    </div>)}</section>)
