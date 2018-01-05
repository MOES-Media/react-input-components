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
}

const Input = styled.input.attrs({
    type: props => props.type,
    placeholder: props => props.placeholder,
    name: props => props.name
})`
    overflow: visible;
    -webkit-appearance: none;
    box-shadow: none;
    transition: box-shadow .1s ease,border-color .1s ease;
    border-radius: 3px;
    color: ${props => props.hasFocus ? 'rgba(0,0,0,.87)' : 'rgba(0,0,0,.8)'};
    border: 1px solid ${props => props.colors ? props.hasFocus ? props.colors.active : props.colors.default : props.hasFocus ? '#85b7d9' : 'rgba(34,36,38,.15)'};
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
    ${props => props.disabled && 'pointer-events: none; opacity: .45;'}
`

export default class extends MetaComponent<InputProps, Meta>{

    static defaultProps = {
        type: "text",
    }

    _onChange({target}: {target: HTMLInputElement}){
        !this.props.disabled && this.props.onChange && this.props.onChange(target.value)
    }

    render(){
        console.log(this.state)
        return <Input type={this.props.type}
                        placeholder={this.props.placeholder}
                        colors={this.props.themeable && this.props.themeable.colors}
                        hasFocus={this.state.focus}
                        disabled={this.props.disabled}
                        name={this.props.name}
                        onFocus={this._onFocus.bind(this)}
                        onBlur={this._onBlur.bind(this)}
                        value={this.props.value}
                        onChange={this._onChange.bind(this)} />
    }
}