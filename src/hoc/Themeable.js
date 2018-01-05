//@flow
import React from 'react'
import theme from 'theme'
import type {Themeable} from 'types'

export default (WrappedComponent: React$ComponentType<Themeable>, overrideDefault: boolean = true) => {

    const composeTheme = (key: string) => {
        return {
            colors: theme.colors[key],
            text: theme.text[key]
        }
    }

    const calculatedTheme = (props: Themeable) => {
        if(props.primary) return composeTheme('primary')
        if(props.info) return composeTheme('info')
        if(props.success) return composeTheme('success')
        if(props.warn) return composeTheme('warn')
        if(props.danger) return composeTheme('danger')
        if(overrideDefault) return composeTheme('default')
    }

    return (props: Themeable) => {
        console.log(props)
        return <WrappedComponent themeable={calculatedTheme(props)} {...props} />
    }
}