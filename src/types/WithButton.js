//@flow
import type {Themeable} from 'types'

export type WithButtonProps = Themeable & {
    buttonLeft?: boolean,
    buttonTheme?: string, 
    block?: boolean,
}