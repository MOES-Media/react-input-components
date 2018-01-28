//@flow
import React from 'react'
import MetaComponent from 'components/MetaComponent'
import styled from 'styled-components'
import type { Themeable, Color } from 'types'

type TextAreaProps = {
    themeable: Themeable,
    value?: string,
    short?: boolean,
    long?: boolean,
    disabled?: boolean,
    themeable: Themeable,
    placeholder?: string,
    block?: boolean,
}

type TextAreaComponentProps = {
    placeholder?: string,
    block?: boolean,
    hasFocus?: boolean,
    colors: Color,
    disabled?: boolean,
    long?: boolean,
    short?: boolean,
    size: string
}

const Textarea: React$ComponentType<*> = styled('textarea').attrs({placeholder: (props: TextAreaComponentProps) => props.placeholder})`
    overflow: auto;
    display: ${(props: TextAreaComponentProps) => props.block ? 'block' : 'inline-block'};
    resize: vertical;
    line-height: 1.25em;
    font-size: 14px;
    padding: 14px 11px;
    box-sizing: border-box;
    color: ${(props: TextAreaComponentProps) => props.hasFocus ? 'rgba(0,0,0,.87)' : 'rgba(0,0,0,.8)'};
    border: 1px solid ${(props: TextAreaComponentProps) => props.hasFocus ? props.colors.active : props.colors.default};
    box-shadow: ${(props: TextAreaComponentProps) => props.hasFocus ? '0 2px 3px 0 rgba(34,36,38,.15)' : 'none'};
    transition: box-shadow .1s ease,width .1s ease;
    outline: 0;
    margin: 0;
    border-radius: 3px;
    height: 90px;
    min-width: ${(props: TextAreaComponentProps) => props.block ? '100%' : '200px'};
    ${(props: TextAreaComponentProps) => props.disabled && 'pointer-events: none; opacity: .65;'}
    ${(props: TextAreaComponentProps) => props.long && 'height: 150px;'}
    ${(props: TextAreaComponentProps) => props.short && 'height: 56px;'}
    vertical-align: top;

    &::placeholder{
        opacity: ${(props: TextAreaComponentProps) => props.hasFocus ? '1' : '.65'};
        font-size: ${(props: TextAreaComponentProps) => props.size};
        vertical-align: top;
    }
`

export default class extends MetaComponent<TextAreaProps, *>{
    
    state = this.getDefaultState()

    getDefaultState(){
    	return Object.assign({}, this.state, {value: this.props.value})
    }

    render(){
    	return(<Textarea onChange={this._onChange.bind(this)}
                onFocus={this._onFocus.bind(this)}
                onBlur={this._onBlur.bind(this)} 
                colors={this.props.themeable.colors}
                hasFocus={this.state.focus} 
                disabled={this.props.disabled}
                block={this.props.block}
                short={this.props.short}
                long={this.props.long}
                placeholder={this.props.placeholder}>
                {this.state.value}
            </Textarea>) 
    }
}