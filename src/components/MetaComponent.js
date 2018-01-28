//@flow
import {PureComponent} from 'react'

type MetaState = {
    focus: boolean,
    touched: boolean,
    value?: string | Array<string> | boolean,
    isOpen?: boolean,
}

type MetaProps = {
    onChange?: (string) => void,
    disabled?: boolean,
}

// eslint-disable-next-line
export default class<Props, State> extends PureComponent<Props & MetaProps, *>{
    
    state: MetaState = {focus: false, touched: false, isOpen: false, value: undefined}

    _onChange({target}: {target: HTMLInputElement}): void{
    	!this.props.disabled && this.props.onChange && this.props.onChange(target.value)
    }

    _onFocus(): void{
    	this.setState({focus: true, touched: true})
    }

    _onBlur(): void{
    	this.setState({focus: false})
    }
}
