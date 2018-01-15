//@flow
import {PureComponent} from 'react'

// eslint-disable-next-line
export default class<Themable, T> extends PureComponent<any, any>{

    state={
        focus: false,
        touched: false,
        value: undefined
    }

    _onChange({target}: {target: HTMLInputElement}){
        !this.props.disabled && this.props.onChange && this.props.onChange(target.value)
    }

    _onFocus(){
        this.setState({focus: true, touched: true})
    }

    _onBlur(){
        this.setState({focus: false})
    }
}
