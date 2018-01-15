//@flow
import React from 'react'
import ChangeableMetaComponent from 'components/ChangeableMetaComponent'
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
    padding: 2px 5px 2px 0;
`

const Checkbox = styled.label`
    cursor: pointer;
    user-select: none;
    color: ${props => props.hasFocus ? 'rgba(0,0,0,.95)' : 'rgba(0,0,0,.8)'};
    padding-left: 26px;
    outline: 0;
    ${props => props.disabled && 'pointer-events: none; opacity: .45;'}
    font-size: 14px;

    &:before{
        position: absolute;
        left: 0;
        top: 2px;
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
            color: ${props.colors.active};
            position: absolute;
            font-size: 17px;
            top: 2px;
            left: 1px;
            width: 17px;
            height: 17px;
            text-align: center;
        }
    `}
`

export default class extends ChangeableMetaComponent<CheckboxProps, CheckboxState>{

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

    render(){
        return(<RelativeWrapper block={this.props.block} 
                    onFocus={this._onFocus.bind(this)}
                    onClick={this._onClick.bind(this)} 
                    onBlur={this._onBlur.bind(this)}>
            <Checkbox hasFocus={this.state.focus}
                        colors={this.props.themeable.colors}
                        checked={this.state.value}
                        disabled={this.props.disabled}
                        tabIndex="0">{this.props.label}</Checkbox>
        </RelativeWrapper>)
    }
}