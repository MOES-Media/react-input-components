//@flow
import React from 'react'
import MetaComponent from 'components/MetaComponent'
import styled from 'styled-components'
import type { Themeable, Meta } from 'types'

export type ButtonProps = Themeable & {
    children: React$Node,
    onClick?: Function,
    disabled?: boolean,
    themeable: Themeable,
    xs?: boolean,
    sm?: boolean,
    md?: boolean,
    lg?: boolean,
    block?: boolean,
}

type ButtonState = Meta & {

}

const Button = styled.button`
    -webkit-tap-highlight-color: transparent;
    -webkit-appearance: button;
    transition: opacity .1s ease,background-color .1s ease,color .1s ease,box-shadow .1s ease,background .1s ease;
    user-select: none;
    box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34,36,38,.15) inset;
    border-radius: 2px;
    text-decoration: none;
    text-align: center;
    font-style: normal;
    line-height: 1em;
    font-weight: 700;
    text-shadow: none;
    padding: 10px 20px;
    margin: 0 3px 0;
    color: ${props => props.text.buttonText};
    background: ${props => props.hasFocus ? props.colors.active : props.colors.default} none;
    ${props => props.disabled && 'opacity: 0.35;'}
    vertical-align: baseline;
    border: none;
    outline: 0;
    min-height: 1em;
    display: inline-block;
    cursor: pointer;
    ${props => props.size && props.size}
    ${props => props.block && 'display: block; width: 100%;'}

    &:hover{
        background: ${props => props.colors.hover};
    }
`

export default class extends MetaComponent<ButtonProps, ButtonState>{

    _onClick(e: Event){
        this.props.onClick && this.props.onClick(e)
    }

    _calculateSize(){
        if(this.props.xs) return 'padding: 1px 5px; font-size: 12px; line-height: 1.5;'
        if(this.props.sm) return 'padding: 5px 10px; font-size: 12px; line-height: 1.5;'
        if(this.props.lg) return 'padding: 10px 16px; font-size: 18px; line-height: 1.3333333;'
    }

    render(){
        console.log(this.props.themeable)
        return(<Button colors={this.props.themeable.colors}
                        text={this.props.themeable.text}
                        hasFocus={this.state.focus}
                        disabled={this.props.disabled}
                        size={this._calculateSize()}
                        block={this.props.block}
                        onFocus={this._onFocus.bind(this)}
                        onBlur={this._onBlur.bind(this)}
                        onClick={this._onClick.bind(this)}>
                    {this.props.children}</Button>)
    }
}