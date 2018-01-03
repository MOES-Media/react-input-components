//@flow
import React from 'react'
import theme from 'theme'
import type {Themeable} from 'types'

export default (WrappedComponent: React.Component<Themeable, any>) => {

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
        return composeTheme('default')
    }

    return (props: Themeable) => {
        return <WrappedComponent themeable={calculatedTheme(props)} {...props} />
    }
}