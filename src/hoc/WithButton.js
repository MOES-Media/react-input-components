//@flow
import React, {PureComponent} from 'react'
import Button  from 'components/Button'
import styled from 'styled-components'
import type {WithButtonProps, Color} from 'types'

type WithButtonWrapperProps = {
    block?: boolean,
    colors: Color,
    disabled?: boolean
}

const WithButtonWrapper: React$ComponentType<*> = styled.div`
    display: ${(props: WithButtonWrapperProps) => props.block ? 'block' : 'inline-block'};
    position: relative;
    box-sizing: border-box;
    border: 1px solid ${(props: WithButtonWrapperProps) => props.colors.default};
    border-radius: 3px;
    ${(props: WithButtonWrapperProps) => props.disabled && 'pointer-events: none; opacity: .65;'}
    padding: 0;
`
const ButtonWrapper: React$ComponentType<*> = styled.div`
    position: absolute;
    top: 0;
    right: 0;
`

export default (WrappedComponent: React$ComponentType<any>): React$ComponentType<any> => class extends PureComponent<any, any>{
    
    buttonWrapper: ?HTMLElement
    props: WithButtonProps

    state = {
        buttonWidth: undefined,
    }

    setButtonWidth(): void{
        this.buttonWrapper && this.setState({buttonWidth: this.buttonWrapper.offsetWidth})
    }

    _onWrappedButtonClick(e: Event): void{
        this.props.onButtonClick && this.props.onButtonClick(e)
    }

    render(){
        return(<WithButtonWrapper block={this.props.block} 
            colors={this.props.themeable.colors}
            disabled={this.props.disabled}>
            <WrappedComponent
                {...this.props}
                borderLess
                offsetRight={this.state.buttonWidth || this.state.buttonWidth === 0 ? this.state.buttonWidth + 5 : this.state.buttonWidth }/>
            <ButtonWrapper innerRef={(ref: HTMLElement) => {
                this.buttonWrapper = ref 
                this.setButtonWidth()}}>
                <Button lg 
                    noLeftRadius
                    themeable={this.props.themeable}
                    transparent={this.props.noBackground}
                    onClick={this._onWrappedButtonClick.bind(this)}>{this.props.buttonContent}</Button>
            </ButtonWrapper>
        </WithButtonWrapper>)
    }
}