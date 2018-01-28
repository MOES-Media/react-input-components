//@flow
import React from 'react'
import ChangeableMetaComponent from 'components/ChangeableMetaComponent'
import styled from 'styled-components'
import Tag from 'components/Select/Tag'
import type {Themeable, Color} from 'types'

type SelectComponentProps = {
    hasFocus?: boolean,
    isOpen?: boolean,
    colors: Color,
    disabled?: boolean,
    block?: boolean
}

const Select = styled.div`
    position: relative;
    text-align: left;
    box-shadow: ${(props: SelectComponentProps) => props.hasFocus ? '0 2px 3px 0 rgba(34,36,38,.15)' : 'none'};
    transition: box-shadow .1s ease,width .1s ease;
    color: ${(props: SelectComponentProps) => props.hasFocus ? 'rgba(0,0,0, .95)' : 'rgba(0,0,0, .87)'};
    border-radius: ${(props: SelectComponentProps) => props.isOpen ? '3px 3px 0 0' : '3px'};
    padding: 11px 30px 11px 14px;
    border: 1px solid ${(props: SelectComponentProps) => props.hasFocus ? props.colors.active : props.colors.default};
    display: ${(props: SelectComponentProps) => props.block ? 'block' : 'inline-block'};
    outline: 0;
    min-width: 150px;
    white-space: normal;
    line-height: 1em;
    word-wrap: break-word;
    cursor: pointer;
    ${(props: SelectComponentProps) => props.isOpen && 'border-bottom: none;'}
    ${(props: SelectComponentProps) => props.disabled && 'pointer-events: none; opacity: .65;' }
    ${(props: SelectComponentProps) => props.block && 'display: block; width: 100%;'}
    box-sizing: border-box;
    background: #fff;
    font-size: 14px;

    &:hover{
        border-color: ${(props: SelectComponentProps) => props.colors.active};
    }
`

type ChevronProps = {isOpen?: boolean}

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
        content: '${(props: ChevronProps) => props.isOpen ? '\\f3d8' : '\\f3d0'}';
        font-family: Ionicons;
    }
`

type ValueProps = {
    isValueSet?: boolean,
}

const Value  = styled.div`
    display: inline-block;
    color: ${(props: ValueProps) => props.isValueSet ? 'rgba(0,0,0,.87)' : 'rgba(191,191,191,.87)'};
`

type OptionListProps = {
    hasFocus?: boolean,
    isOpen?: boolean,
    colors: Color
}

const OptionList  = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    cursor: auto;
    max-height: 160px;
    box-shadow: ${(props: OptionListProps) => props.hasFocus ? '0 2px 3px 0 rgba(34,36,38,.15)' : 'none'};
    display: ${(props: OptionListProps) => props.isOpen ? 'block' : 'none'};
    ${(props: OptionListProps) => props.isOpen && 'visibility: visible;'}
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
    border: 1px solid ${(props: OptionListProps) => props.colors.active};
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

type OptionComponentProps = {
    selected?: boolean,    
}

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
    font-weight: ${(props: OptionComponentProps) => props.selected ? '700': '400'};
    border-top: 1px solid #fafafa;
    background: ${(props: OptionComponentProps) => props.selected ? 'rgba(0,0,0,.05)' : '#fff'};
    
    &:hover{
        background: rgba(0,0,0,.05);
        z-index: 13;
    }
`

type OptionProps = {
    selected?: boolean,
    onClick: Function,
    label: string,
    value?: string,
}

const SelectOption = (props: OptionProps) => <Option selected={props.selected} onClick={props.onClick.bind(null, props.value)}>{props.label}</Option>

type SelectProps = {
    themeable: Themeable,
    placeholder: string,
    options: Array<{value: string, label: string}>,
    withEmptyOption?: boolean,
    disabled?: boolean,
    block?: boolean,
    multiSelect?: boolean,
}

type SelectState =  {
    isOpen: boolean,
}

export default class extends ChangeableMetaComponent<SelectProps, SelectState>{

    state = this.getDefaultState()

    getDefaultState(){
    	return this.props.multiSelect ? Object.assign({}, this.state, {isOpen: false, value: []}) :Object.assign({}, this.state, {isOpen: false})
    }

    _handleFocus(): void{
    	this._onFocus()
    	this.setState({isOpen: true})
    }

    _handleBlur(): void{
    	this._onBlur()
    	this.setState({isOpen: false})
    }

    _handleChevronClick(): void{
    	this.setState({isOpen: !this.state.isOpen})
    }

    _onOptionSelect(value: string): void{
    	this.setState({value, isOpen: false})
    }

    _getSingleSelectValue(): string{
        const filteredOptions:Array<{value: string, label: string}> = this.props.options.filter(option => option.value === this.state.value)
        return  filteredOptions && filteredOptions[0] && filteredOptions[0].label
    }

    _getMultiSelectValues(): Array<React$Element<*>>{
        const filteredOptions:Array<{value: string, label: string}> = this.props.options.filter(option => this.state.value && Array.isArray(this.state.value) && this.state.value.indexOf(option.value) > -1)
        return filteredOptions && filteredOptions.map(option => <Tag label={option.label} value={option.value} onClick={this._removeValue.bind(this)} />)
    }

    _removeValue(value: string): void{
        console.log(value)
    }

    _getValue(): string | Array<React$Element<*>>{
        return this.props.multiSelect ? this._getMultiSelectValues() : this._getSingleSelectValue()
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
    			{this.state.value ? this._getValue() : this.props.placeholder}
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
