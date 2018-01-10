//@flow
import React from 'react'
import styled from 'styled-components'
import MetaComponent from 'components/MetaComponent'
import ChangeableMetaComponent from 'components/ChangeableMetaComponent'
import type {Meta, Themeable} from 'types'

type RadioChoiceProps = {
    onChange: Function,
    value: string,
    label: string,
    selectedValue?: string,
    disabled?: boolean,
}

const RelativeWrapper = styled.div`
    display: inline-block;
    position: relative;
    min-width: 17px;
    vertical-align: baseline;
    padding: 2px 5px 2px 0;
    ${props => props.block && 'display: block; width: 100%;'}
`

const Radio = styled.div`
    display: ${props => props.block ? 'block' : 'inline-block'};
`

const Choice = styled.label`
    cursor: pointer;
    user-select: none;
    color: ${props => props.hasFocus ? 'rgba(0,0,0,.95)' : 'rgba(0,0,0,.8)'};
    padding-left: 26px;
    outline: 0;
    ${props => props.disabled && 'pointer-events: none; opacity: .45;'}
    ${props => props.block && 'display: block; width: 100%;'}

    &:before{
        position: absolute;
        content: '';
        background: #fff;
        border-radius: 50%;
        -webkit-transform: none;
        transform: none;
        width: 15px;
        height: 15px;
        top: 3px;
        left: 0;
        border:1px solid ${props => props.hasFocus ? props.colors.active : props.colors.default};
    }

    ${props => props.checked && `
        &:after{
            position: absolute;
            font-size: 20px;
            text-align: center;
            opacity: 0;
            color: ${props.hasFocus ? props.colors.active : props.colors.default};
            opacity: 1;
            border: none;
            font-family: Ionicons;
            content: '\\f1f7';
            width: 15px;
            height: 15px;
            line-height: 15px;
            top: 4px;
            left: 0;
        }
    `}
`

class RadioChoice extends MetaComponent<RadioChoiceProps, Meta>{

    _onChange(){
        this.props.onChange(this.props.value)
    }

    render(){
        return(<RelativeWrapper block={this.props.block}>
                    <Choice value={this.props.value}
                            hasFocus={this.state.focus}
                            checked={this.props.value === this.props.selectedValue}
                            onClick={this._onChange.bind(this)}
                            colors={this.props.themeable.colors}
                            disabled={this.props.disabled}
                            onBlur={this._onBlur.bind(this)}
                            onFocus={this._onFocus.bind(this)}
                            block={this.props.block}
                            tabIndex="0">
                        {this.props.label}
                    </Choice>
                </RelativeWrapper>)
    }
}

type RadioProps = {
    children: React$Element<typeof RadioChoice> | Array<React$Element<typeof RadioChoice>>,
    value?: string,
    onChange: Function,
    themeable: Themeable,
    disabled?: boolean,
    block?: boolean,
}

type RadioState = {
    value: string,
}

// eslint-disable-next-line
export default class<Themeable> extends ChangeableMetaComponent<RadioProps, RadioState> {

    static Choice = RadioChoice
    state = this.getDefaultState()

    static defaultProps = {
        value: false,
    }

    getDefaultState(){
        return Object.assign({}, this.state, {value: this.props.value})
    }

    _onChoiceChange(value: string){
        this.setState({value})   
    }

    addPropsToChild(child: React$Element<typeof RadioChoice>, props?: Object){
        return React.cloneElement(child, {...props, 
            themeable: this.props.themeable, 
            onChange: this._onChoiceChange.bind(this), 
            selectedValue: this.state.value,
            disabled: this.props.disabled,
            block: this.props.block})
    }

    render(){
        return(<Radio block={this.props.block}>
            {Array.isArray(this.props.children) ? this.props.children.map((child, index )=> this.addPropsToChild(child, {key: index})) : this.addPropsToChild(this.props.children)}
            </Radio>)
    }
}

export {
    RadioChoice as Choice,
}