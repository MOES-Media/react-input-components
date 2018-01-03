//@flow
import {PureComponent} from 'react'
import type {Meta} from 'types'

export default class extends PureComponent<any, Meta>{

    state={
        focus: false,
        touched: false
    }

    _onFocus(){
        this.setState({focus: true, touched: true})
    }

    _onBlur(){
        this.setState({focus: false})
    }
}
