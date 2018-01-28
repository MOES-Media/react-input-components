//@flow
import React, {PureComponent} from 'react'
import styled from 'styled-components'

type TagProps = {
    value: string,
    label: string,
    onClick: Function,
}

const Tag: React$ComponentType<*> = styled.a`
    text-decoration: none;
    transition: background .1s ease;
    border-radius: 2px;
    border: 0 solid transparent;
    color: rgba(0,0,0, .6);
    text-transform: none;
    background-color: #e8e8e8;
    display: inline-block;
    vertical-align: top;
    white-space: normal;
    font-size: 12px;
    padding: 5px 11px;
    margin: 2px 4px 2px 0;
    box-shadow: 0 0 0 1px rgba(34,36,38,.15) inset;
    cursor: pointer;

    &:hover{
        background-color: #e0e0e0;
        border-color: #e0e0e0;
        color: rgba(0,0,0,.8);
    }
`

const Icon: React$ComponentType<*> = styled.i`
    display: inline-block;
    height: 1em;
    font-style: normal;
    font-weight: 400;
    font-family: 'Ionicons';
    text-align: center;
    font-size: 14px;
    vertical-align: text-bottom;
    width: auto;
    margin-left: 10px;
    opacity: .5;
    cursor: pointer;
    transition: background .1s ease;

    &:before{
        content: "\\f406";
    }

    &:hover{
        opacity: 1;
    }
`

export default class extends PureComponent<TagProps, *> {

    render(){
        return(<Tag>{this.props.label}<Icon onClick={this.props.onClick.bind(null, this.props.value)}/></Tag>)
    }
}