//@flow
import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'components'
import styled from 'styled-components'
import type {WithButtonProps} from 'types'

const WithButtonWrapper = styled.div`
    display: ${props => props.block ? 'block' : 'inline-block'};
    position: relative;
    box-sizing: border-box;
    border: 1px solid ${props => props.colors.default};
    border-radius: 3px;
    ${props => props.disabled && 'pointer-events: none; opacity: .65;'}
`
const ButtonWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
`

export default (WrappedComponent: React$ComponentType<WithButtonProps>) => class extends React.PureComponent<any, any>{
    buttonWrapper = null;
    wrappedComponentRef = null;

    state:{
        buttonWidth: typeof undefined | number,
    } = {
        buttonWidth: undefined,
    }

    setButtonWidth(){
        this.setState({buttonWidth: this.buttonWrapper && this.buttonWrapper.offsetWidth})
    }

    _onWrappedButtonClick(){
        ReactDOM.findDOMNode(this) &&  ReactDOM.findDOMNode(this).querySelector('input') && ReactDOM.findDOMNode(this).querySelector('input').focus()
        this.props.onButtonClick && this.props.onButtonClick()
    }

    render(){
        return(<WithButtonWrapper block={this.props.block} 
            colors={this.props.themeable.colors}>
            <WrappedComponent {...this.props} 
                borderLess
                offsetRight={this.state.buttonWidth ? this.state.buttonWidth + 5 : this.state.buttonWidth }
                ref={(ref) => this.wrappedComponentRef = ref} />
            <ButtonWrapper innerRef={(ref) => {
                this.buttonWrapper = ref 
                this.setButtonWidth()}}>
                <Button lg 
                    noLeftRadius
                    transparent={this.props.noBackground}
                    disabled={this.props.disabled}
                    onClick={() => this._onWrappedButtonClick()}>{this.props.buttonContent}</Button>
            </ButtonWrapper>
        </WithButtonWrapper>)
    }
} 