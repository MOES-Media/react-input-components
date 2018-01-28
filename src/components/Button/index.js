//@flow
import React from 'react'
import MetaComponent from 'components/MetaComponent'
import styled from 'styled-components'
import type { Theme, Text, Color } from 'types'

export type ButtonProps = {
    children: React$Node,
    onClick?: (Event) => void,
    disabled?: boolean,
    themeable: Theme,
    xs?: boolean,
    sm?: boolean,
    md?: boolean,
    lg?: boolean,
    block?: boolean,
    noLeftRadius?: boolean,
    transparent?: boolean,
}

type InputComponentProps = {
    text: Text,
    transparent?: boolean,
    hasFocus?: boolean,
    colors: Color,
    disabled?: boolean,
    size?: string,
    block?: boolean,
    noLeftRadius?: boolean
}

const Button: React$ComponentType<*> = styled.button`
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
    color: ${(props: InputComponentProps) => props.text.buttonText};
    background: ${(props: InputComponentProps) => props.transparent ? 'transparent' : props.hasFocus ? props.colors.active : props.colors.default} none;
    ${(props: InputComponentProps) => props.disabled && 'opacity: 0.65;'}
    vertical-align: baseline;
    border: none;
    outline: 0;
    min-height: 1em;
    display: inline-block;
    margin: 0;
    cursor: ${(props: InputComponentProps) => props.disabled ? 'not-allowed' : 'pointer'};
    ${(props: InputComponentProps) => props.size && props.size}
    ${(props: InputComponentProps) => props.block && 'display: block; width: 100%;'}
    ${(props: InputComponentProps) => props.noLeftRadius && 'border-top-left-radius: 0; border-bottom-left-radius: 0;'}

    ${(props: InputComponentProps) => !props.disabled && `&:hover{
        background: ${props.transparent ? 'transparent' : props.colors.hover};
    }`}
`

export default class extends MetaComponent<ButtonProps, *>{

	_onClick(e: Event): void{
		this.props.onClick && this.props.onClick(e)
	}

	_calculateSize(): ?string{
		if(this.props.xs) return 'padding: 1px 5px; font-size: 12px; line-height: 1.5em;'
		if(this.props.sm) return 'padding: 5px 10px; font-size: 12px; line-height: 1.5em;'
		if(this.props.lg) return 'padding: 10px 14px; font-size: 14px; line-height: 1.25em;'
	}

	render(){
		return(<Button colors={this.props.themeable.colors}
                text={this.props.themeable.text}
                hasFocus={this.state.focus}
                disabled={this.props.disabled}
                size={this._calculateSize()}
                block={this.props.block}
                onFocus={this._onFocus.bind(this)}
                onBlur={this._onBlur.bind(this)}
                onClick={this._onClick.bind(this)}
                noLeftRadius={this.props.noLeftRadius}
                transparent={this.props.transparent} >
                {this.props.children}
            </Button>)
	}
}