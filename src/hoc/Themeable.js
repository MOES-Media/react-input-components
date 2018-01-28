//@flow
import React from 'react'
import theme from 'theme'
import type {Themeable} from 'types'

export default (WrappedComponent: React$ComponentType<*>, overrideDefault: boolean = true): React$ComponentType<*> => {

	const composeTheme = (key: 'primary' | 'info' | 'success' | 'warn' | 'danger' | 'default') => {
		return {
			colors: theme.colors[key],
			text: theme.text[key]
		}
	}

	const calculatedTheme = (props: Themeable) => props.primary ? composeTheme('primary') : 
		props.info ? composeTheme('info') : 
		props.success ? composeTheme('success') : 
		props.warn ? composeTheme('warn') : 
		props.danger ? composeTheme('danger') : 
		overrideDefault ? composeTheme('default') : undefined

	return (props: Themeable) => {
		return <WrappedComponent themeable={calculatedTheme(props)} {...props} />
	}
}