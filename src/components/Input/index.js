//@flow
import React from 'react'
import MetaComponent from 'components/MetaComponent'
import type {Meta, Themeable} from 'types' 
import styled from 'styled-components'

type InputProps = {
    type?: string,
    themeable: Themeable,
    disabled?: boolean,
    onChange?: Function,
}

const Input = styled.input.attrs({
    type: props => props.type
})`
    overflow: visible;
    -webkit-appearance: none;
    box-shadow: none;
    transition: box-shadow .1s ease,border-color .1s ease;
    border-radius: 3px;
    color: #555;
    border: 1px solid rgba(34,36,38,.15);
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
`

export default class extends MetaComponent<InputProps, Meta>{

    static defaultProps = {
        type: "text"
    }

    _onChange({target}: {target: HTMLInputElement}){
        !this.props.disabled && this.props.onChange && this.props.onChange(target.value)
    }

    render(){
        return <Input type={this.props.type} 
                        onChange={this._onChange.bind(this)} />
    }
}