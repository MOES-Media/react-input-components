//@flow
import React from 'react'
import MetaComponent from 'components/MetaComponent'
import {Meta} from 'types'
import styled from 'styled-components'

type InputProps = {
    type?: string
}

const Input = styled.input.attrs({
    type: props => props.type
})`

`

export default class extends MetaComponent<InputProps, Meta>{

    static defaultProps = {
        type: "text"
    }

    render(){
        return <Input type={this.props.type} />
    }
}