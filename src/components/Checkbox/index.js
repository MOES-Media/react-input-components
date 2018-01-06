//@flow
import React from 'react'
import MetaComponent from 'components/MetaComponent'
import styled from 'styled-components'
import type {Meta, Themeable} from 'types'

type CheckboxProps = {
    name: string,
    checked: boolean,
    label?: string,
    block?: boolean,
    themeable: Themeable,
    label?: string
}

type CheckboxState = Meta & {
    value: boolean,
}

const RelativeWrapper = styled.div`
    display: ${props => props.block ? 'block' : 'inline-block'};
    position: relative;
    min-width: 17px;
    vertical-align: baseline;
`

const Checkbox = styled.label`
    cursor: pointer;
    user-select: none;
    color: ${props => props.hasFocus ? 'rgba(0,0,0,.95)' : 'rgba(0,0,0,.8)'};
    padding-left: 26px;
    outline: 0;
    ${props => props.disabled && 'pointer-events: none; opacity: .45;'}

    &:before{
        position: absolute;
        left: 0;
        top: 0;
        content: '';
        width: 17px;
        height: 17px;
        background: #fff;
        border-radius: 3px;
        border: 1px solid ${props => props.hasFocus ? props.colors.active : props.colors.default};
    }

    ${props => props.checked && `
        &:after{
            font-family: 'Ionicons';
            content: '\\f3ff';
            color: ${props.colors.default};
            position: absolute;
            font-size: 17px;
            top: 0;
            left: 1px;
            width: 17px;
            height: 17px;
            text-align: center;
        }
    `}
`

export default class extends MetaComponent<CheckboxProps, CheckboxState>{

    static defaultProps = {
        checked: false,
    }

    state = this.getDefaultState()

    getDefaultState(){
        return Object.assign({}, this.state, {value: this.props.checked})
    }

    _onClick(){
        this.setState({value: !this.state.value})
    }

    _onChange({target} : {target: HTMLInputElement}){
        this.props.onChange && this.props.onChange(target.value)
    }

    render(){
        return(<RelativeWrapper block={this.props.block} 
                    onClick={this._onClick.bind(this)} 
                    onFocus={this._onFocus.bind(this)}
                    onBlur={this._onBlur.bind(this)}>
            <input type="hidden" name={this.props.name} value={this.state.value} onChange={this._onChange.bind(this)}/>
            <Checkbox hasFocus={this.state.focus}
                        colors={this.props.themeable.colors}
                        checked={this.state.value}
                        disabled={this.props.disabled}
                        tabIndex="0">{this.props.label}</Checkbox>
        </RelativeWrapper>)
    }
}