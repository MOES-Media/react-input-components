//@flow
import React from 'react'
import MetaComponent from 'components/MetaComponent'
import type {Meta, Themeable} from 'types' 
import styled from 'styled-components'

type InputProps = {
    type?: string,
    name: string,
    value?: string,
    themeable: Themeable,
    disabled?: boolean,
    onChange?: Function,
    placeholder?: string,
    block?: boolean,
    xs?: boolean,
    sm?: boolean,
    md?: boolean,
    lg?: boolean,
    huge?: boolean,
    massive?: boolean,
    value?: string,
    offsetRight?: number,
    borederLess?: boolean,
}

const Input = styled.input.attrs({
	type: props => props.type,
	placeholder: props => props.placeholder,
	name: props => props.name
})`
    overflow: visible;
    -webkit-appearance: none;
    box-shadow: ${props => props.hasFocus ? '0 2px 3px 0 rgba(34,36,38,.15)' : 'none'};
    transition: box-shadow .1s ease,border-color .1s ease;
    border-radius: 3px;
    color: ${props => props.hasFocus ? 'rgba(0,0,0,.87)' : 'rgba(0,0,0,.8)'};
    border: 1px solid ${props => props.noBorder ? 'transparent' : props.colors ? props.hasFocus ? props.colors.active : props.colors.default : props.hasFocus ? '#85b7d9' : 'rgba(34,36,38,.15)'};
    background: #fff;
    padding: 10px 14px;
    line-height: 17px;
    text-align: left;
    -webkit-tap-highlight-color: rgba(255,255,255,0);
    outline: 0;
    flex: 1 0 auto;
    -webkit-box-flex: 1;
    -ms-flex: 1 0 auto;
    margin: 0;
    max-width: 100%;
    ${props => props.disabled && 'pointer-events: none; opacity: .65;'}
    ${props => props.block && 'display: block; min-width: 100%;'}
    box-sizing: border-box;
    font-size: ${props => props.size};
    ${props => props.offsetRight && `padding-right: ${props.offsetRight}px;`}

    &::placeholder{
        opacity: ${props => props.hasFocus ? '1' : '.65'};
        font-size: ${props => props.size};
        vertical-align: bottom;
    }
`

export default class extends MetaComponent<InputProps, Meta>{

    static defaultProps = {
    	type: 'text',
    }

    state = this.getDefaultState()

    getDefaultState(){
    	return Object.assign({}, this.state, {value: this.props.value})
    }

    render(){
        return <Input type={this.props.type}
            ref={this.props.inputRef}
    		placeholder={this.props.placeholder}
    		colors={this.props.themeable && this.props.themeable.colors}
    		hasFocus={this.state.focus}
    		disabled={this.props.disabled}
    		name={this.props.name}
    		size={this.props.xs ? '10px' : this.props.sm ? '12px' : this.props.lg ? '16px' : this.props.huge ? '20px' : this.props.massive ? '24px' : '14px'}
    		onFocus={this._onFocus.bind(this)}
    		onBlur={this._onBlur.bind(this)}
    		value={this.props.value}
            block={this.props.block}
            offsetRight={this.props.offsetRight}
            noBorder={this.props.borderLess}
    		onChange={this._onChange.bind(this)} />
    }
}