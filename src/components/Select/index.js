//@flow
import React from 'react'
import ChangeableMetaComponent from 'components/ChangeableMetaComponent'
import styled from 'styled-components'
import type {Themeable, Changeable} from 'types'

const Select = styled.div`
    position: relative;
    text-align: left;
    box-shadow: none;
    transition: box-shadow .1s ease,width .1s ease;
    color: ${props => props.hasFocus ? 'rgba(0,0,0, .95)' : 'rgba(0,0,0, .87)'};
    border-radius: 3px;
    padding: 11px 30px 11px 14px;
    border: 1px solid ${props => props.hasFocus ? props.colors.active : props.colors.default};
    display: ${props => props.block ? 'block' : 'inline-block'};
    outline: 0;
    min-width: 150px;
    transform: rotateZ(0);
    white-space: normal;
    line-height: 1em;
    word-wrap: break-word;
    cursor: pointer;

    &:hover{
        border-color: ${props => props.colors.active};
    }
`

const Chevron = styled.i`
    position: absolute;
    padding: 11px;
    margin: -10px;
    right: 12px;
    top: 10px;
    line-height: 14px;
    z-index: 3;
    cursor: pointer;
    width: auto;
    height: auto;

    &:before{
        font-style: normal;
        content: '${props => props.hasFocus ? '\\f3d8' : '\\f3d0'}';
        font-family: Ionicons;
    }
`

const Value = styled.div`
    display: inline-block;
    color: ${props => props.isValueSet ? 'rgba(0,0,0,.87)' : 'rgba(191,191,191,.87)'};
`

type SelectProps = {
    themeable: Themeable,
    placeholder: string,
}

export default class extends ChangeableMetaComponent<SelectProps, Changeable>{

    render(){
        return(<Select tabIndex="0"
                    hasFocus={this.state.focus}
                    onFocus={this._onFocus.bind(this)}
                    onBlur={this._onBlur.bind(this)}
                    colors={this.props.themeable.colors}>
            <Value isValueSet={this.state.value}>
                {this.state.value ? this.state.value : this.props.placeholder}
            </Value>
            <Chevron hasFocus={this.state.focus}/>
    </Select>)
    }
}
