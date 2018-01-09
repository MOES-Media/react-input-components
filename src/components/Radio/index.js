//@flow
import React, {PureComponent} from 'react'
import styled from 'styled-components'
import MetaComponent from 'components/MetaComponent'
import type {Meta, Themeable} from 'types'

type RadioChoiceProps = {
    onChange: Function,
    value: string,
    label: string,
    selectedValue?: string,
}

const RelativeWrapper = styled.div`
    display: inline-block;
    position: relative;
`

const Radio = styled.div`

`

const Choice = styled.label`
    cursor: pointer;
    user-select: none;
    color: ${props => props.hasFocus ? 'rgba(0,0,0,.95)' : 'rgba(0,0,0,.8)'};
    padding-left: 26px;
    outline: 0;
    ${props => props.disabled && 'pointer-events: none; opacity: .45;'}

    &:before{
        position: absolute;
        top: 0;
        left: 0;
        width: 17px;
        height: 17px;
        content: '';
        background: #fff;
        border-radius: 50%;
        -webkit-transform: none;
        transform: none;
        width: 15px;
        height: 15px;
        top: 1px;
        left: 0;
        border:1px solid ${props => props.hasFocus ? props.colors.active : props.colors.default}
    }
`

class RadioChoice extends MetaComponent<RadioChoiceProps, Meta>{

    _onChange(){
        this.props.onChange(this.props.value)
    }

    render(){
        return(<RelativeWrapper>
                    <Choice value={this.props.value}
                            hasFocus={this.state.focus}
                            checked={this.props.value === this.props.selectedValue}
                            onClick={this._onChange.bind(this)}
                            colors={this.props.themeable.colors}>
                        {this.props.label}
                    </Choice>
                </RelativeWrapper>)
    }
}

type RadioProps = {
    children: React$Element<typeof RadioChoice> | Array<React$Element<typeof RadioChoice>>,
    value?: string,
    onChange: Function,
    themeable: Themeable
}

type RadioState = {
    value: string,
}

// eslint-disable-next-line
export default class<Themeable> extends PureComponent<RadioProps, RadioState> {

    static Choice = RadioChoice
    state = this.getDefaultState()

    static defaultProps = {
        value: false
    }

    getDefaultState(){
        return Object.assign({}, this.state, {value: this.props.value})
    }

    _onChoiceChange(value: string){
        this.setState({value})   
    }

    _onChange(){
        this.props.onChange && this.props.onChange(this.state.value)
    }

    render(){
        return(<Radio>
                <input type="hidden" value={this.state.value} onChange={this._onChange.bind(this)} />
                {Array.isArray(this.props.children) ? this.props.children.map(child => React.cloneElement(child, {themeable: this.props.themeable,onChange: this._onChoiceChange.bind(this)})) 
                    : React.cloneElement(this.props.children, {themeable: this.props.themeable,onChange: this._onChoiceChange.bind(this)})  }
            </Radio>)
    }
}

export {
    RadioChoice as Choice,
}