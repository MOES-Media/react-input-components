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