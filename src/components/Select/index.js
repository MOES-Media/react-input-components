//@flow
import React, {PureComponent} from 'react'
import ChangeableMetaComponent from 'components/ChangeableMetaComponent'
import styled from 'styled-components'
import type {Themeable, Changeable} from 'types'

const Select = styled.div`
    position: relative;
    text-align: left;
    box-shadow: ${props => props.hasFocus ? '0 2px 3px 0 rgba(34,36,38,.15)' : 'none'};
    transition: box-shadow .1s ease,width .1s ease;
    color: ${props => props.hasFocus ? 'rgba(0,0,0, .95)' : 'rgba(0,0,0, .87)'};
    border-radius: ${props => props.isOpen ? '3px 3px 0 0' : '3px'};
    padding: 11px 30px 11px 14px;
    border: 1px solid ${props => props.hasFocus ? props.colors.active : props.colors.default};
    display: ${props => props.block ? 'block' : 'inline-block'};
    outline: 0;
    min-width: 150px;
    white-space: normal;
    line-height: 1em;
    word-wrap: break-word;
    cursor: pointer;
    ${props => props.isOpen && 'border-bottom: none;'}
    ${props => props.disabled && 'pointer-events: none; opacity: .65;' }
    ${props => props.block && 'display: block; width: 100%;'}
    box-sizing: border-box;
    background: #fff;

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
    cursor: pointer;
    width: auto;
    height: auto;
    opacity: .99;

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
    max-height: 160px;
    box-shadow: ${props => props.hasFocus ? '0 2px 3px 0 rgba(34,36,38,.15)' : 'none'};
    display: ${props => props.isOpen ? 'block' : 'none'};
    ${props => props.isOpen && 'visibility: visible;'}
    border-radius: 0 0 3px 3px;
    width: 100%;
    min-width: 100%;
    transition: box-shadow .1s ease,width .1s ease, opacity .1s ease;
    margin: 0 -1px;
    outline: 0;
    border-top-width: 0;
    overflow-x: hidden;
    overflow-y: auto;
    z-index: 11;
    border: 1px solid ${props => props.colors.active};
    text-align: left;
    padding: 0 0;
    font-size: 1em;
    background: #fff;
    border-top: none;
    will-change: transform,opacity;

    animation-iteration-count: 1;
    animation-duration: .3s;
    animation-timing-function: ease;
    animation-fill-mode: both;
`

const Option = styled.div`
    min-height: 1em;
    padding: 11px 16px;
    white-space: normal;
    word-wrap: normal;
    border-top-width: 0;
    cursor: pointer;
    border: none;
    height: auto;
    text-align: left;
    z-index: 12 ;
    line-height: 1em;
    color: rgba(0,0,0, .87);
    font-size: 1em;
    text-transform: none;
    box-shadow: none;
    font-weight: ${props => props.selected ? '700': '400'};
    border-top: 1px solid #fafafa;
    background: ${props => props.selected ? 'rgba(0,0,0,.05)' : '#fff'};
    
    &:hover{
        background: rgba(0,0,0,.05);
        z-index: 13;
    }
`

class SelectOption extends PureComponent<any, any>{
    
    render(){
        return(<Option selected={this.props.selected} onClick={this.props.onClick.bind(null, this.props.value)}>{this.props.label}</Option>)
    }
}

type SelectProps = {
    themeable: Themeable,
    placeholder: string,
    options: Array<{value: string, label:string}>,
    withEmptyOption?: boolean,
    disabled?: boolean,
    block?: boolean,
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

    _handleChevronClick(){
        this.setState({isOpen: !this.state.isOpen})
    }

    _onOptionSelect(value: string){
        this.setState({value, isOpen: false})
    }

    render(){
        return(<Select tabIndex="0"
                    disabled={this.props.disabled}
                    block={this.props.block}
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
                {this.props.withEmptyOption && <SelectOption onClick={this._onOptionSelect.bind(this)} label=" " value={undefined} />}
                {this.props.options.map((option: {value: string, label: string}, index: number) => <SelectOption selected={this.state.value === option.value} key={index} onClick={this._onOptionSelect.bind(this)} value={option.value} label={option.label} />)}
            </OptionList>
    </Select>)
    }
}
