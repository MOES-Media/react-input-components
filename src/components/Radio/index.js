//@flow
import React from 'react'
import styled from 'styled-components'
import MetaComponent from 'components/MetaComponent'
import ChangeableMetaComponent from 'components/ChangeableMetaComponent'
import type {Themeable, Color} from 'types'

type RadioChoiceProps = {
    onChange: (string) => void,
    value: string,
    label: string,
    selectedValue?: string,
    disabled?: boolean,
    block?: boolean,
    themeable: Themeable,
}

type RelativeWrapperProps = {block?: boolean}

const RelativeWrapper: React$ComponentType<*> = styled.div`
    display: inline-block;
    position: relative;
    min-width: 17px;
    vertical-align: baseline;
    padding: 2px 5px 2px 0;
    ${(props: RelativeWrapperProps) => props.block && 'display: block; width: 100%;'}
`

type RadioComponentProps = {
    block?: boolean
}

const Radio: React$ComponentType<*> = styled.div`
    display: ${(props: RadioComponentProps) => props.block ? 'block' : 'inline-block'};
`

type ChoiceComponentProps = {
    hasFocus?: boolean,
    diasbled?: boolean,
    block?: boolean,
    colors: Color,
    checked?: boolean,
}

const Choice: React$ComponentType<*> = styled.label`
    cursor: pointer;
    user-select: none;
    color: ${(props: ChoiceComponentProps) => props.hasFocus ? 'rgba(0,0,0,.95)' : 'rgba(0,0,0,.8)'};
    padding-left: 26px;
    outline: 0;
    ${(props: ChoiceComponentProps) => props.disabled && 'pointer-events: none; opacity: .45;'}
    ${(props: ChoiceComponentProps) => props.block && 'display: block; width: 100%;'}
    font-size: 14px;

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
        border:1px solid ${(props: ChoiceComponentProps) => props.hasFocus ? props.colors.active : props.colors.default};
    }

    ${(props: ChoiceComponentProps) => props.checked && `
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

class RadioChoice extends MetaComponent<RadioChoiceProps, *>{

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


export default class extends ChangeableMetaComponent<RadioProps, *> {

    static Choice = RadioChoice

    state = this.getDefaultState()

    static defaultProps = {
    	value: false,
    }

    getDefaultState(){
    	return Object.assign({}, this.state, {value: this.props.value})
    }

    _onChoiceChange(value: string): void{
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