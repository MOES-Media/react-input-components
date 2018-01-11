//@flow
import React, {PureComponent} from 'react'
import ChangeableMetaComponent from 'components/ChangeableMetaComponent'
import styled from 'styled-components'
import type {Themeable, Changeable} from 'types'

const Select = styled.div`
    position: relative;
    text-align: left;
    box-shadow: none;
    transition: box-shadow .1s ease,width .1s ease;
    color: ${props => props.hasFocus ? 'rgba(0,0,0, .95)' : 'rgba(0,0,0, .87)'};
    border-radius: ${props => props.isOpen ? '3px 3px 0 0' : '3px'};
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
    ${props => props.isOpen && 'border-bottom: none;'}

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
        content: '${props => props.isOpen ? '\\f3d8' : '\\f3d0'}';
        font-family: Ionicons;
    }
`

const Value = styled.div`
    display: inline-block;
    color: ${props => props.isValueSet ? 'rgba(0,0,0,.87)' : 'rgba(191,191,191,.87)'};
`

const OptionList = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    cursor: auto;
    display: ${props => props.isOpen ? 'block' : 'none'};
    border-radius: 0 0 3px 3px;
    width: 100%;
    min-width: 100%;
    transition: opacity .1s ease;
    margin: 0 -1px;
    outline: 0;
    border-top-width: 0;
    overflow-x: hidden;
    overflow-y: auto;
    will-change: transform,opacity;
    z-index: 11;
    border: 1px solid ${props => props.colors.active};
    text-align: left;
    padding: 0 0;
    font-size: 1em;
    background: #fff;
    border-top: none;
`

const Option = styled.div`
    padding: 11px 16px;
    white-space: normal;
    word-wrap: normal;
    border-top-width: 0;
    position: relative;
    cursor: pointer;
    border: none;
    height: auto;
    text-align: left;
    line-height: 1em;
    color: rgba(0,0,0, .87);
    font-size: 1em;
    text-transform: none;
    box-shadow: none;
    font-weight: ${props => props.selected ? '700': '400'};
    border-top: 1px solid #fafafa;
    
    &:hover{
        background: rgba(0,0,0,.05);
        z-index: 13;
    }
`

class SelectOption extends PureComponent<any, any>{
    
    render(){
        return(<Option>{this.props.label}</Option>)
    }
}

type SelectProps = {
    themeable: Themeable,
    placeholder: string,
    children: React$Element<typeof SelectOption> | Array<React$Element<typeof SelectOption>>
}

type SelectState =  Changeable & {
    isOpen: boolean,
}

export default class extends ChangeableMetaComponent<SelectProps, SelectState>{

    state = this.getDefaultState()

    getDefaultState(){
        return Object.assign({}, this.state, {isOpen: false})
    }

    _handleFocus(){
        this._onFocus()
        this.setState({isOpen: true})
    }

    _handleBlur(){
        this._onBlur()
        this.setState({isOpen: false})
    }

    _handleChevronClick(e: Event){
        this.setState({isOpen: !this.state.isOpen})
    }

    render(){
        return(<Select tabIndex="0"
                    hasFocus={this.state.focus}
                    onFocus={this._handleFocus.bind(this)}
                    onBlur={this._handleBlur.bind(this)}
                    colors={this.props.themeable.colors}
                    isOpen={this.state.isOpen}>
            <Value isValueSet={this.state.value}>
                {this.state.value ? this.state.value : this.props.placeholder}
            </Value>
            <Chevron onMouseDown={this._handleChevronClick.bind(this)} 
                        isOpen={this.state.isOpen}/>
            <OptionList isOpen={this.state.isOpen} 
                        hasFocus={this.state.focus} 
                        colors={this.props.themeable.colors}>
                {this.props.children}
            </OptionList>
    </Select>)
    }
}

export {
    SelectOption as Option
}
