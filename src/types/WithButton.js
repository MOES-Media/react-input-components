//@flow
import type {Themeable} from 'types'

export type WithButtonProps = Themeable & {
    buttonLeft?: boolean,
    buttonTheme?: string, 
    block?: boolean,
    buttonContent: React$Node,
    onButtonClick?: Function,
    noBackground?: boolean,
}