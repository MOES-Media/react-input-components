//@flow
import type {Theme} from 'types/Theme'

export type WithButtonProps =  {
    buttonLeft?: boolean,
    buttonTheme?: string, 
    block?: boolean,
    buttonContent: React$Node,
    onButtonClick?: (Event) => void,
    noBackground?: boolean,
    themeable: Theme,
    disabled?: boolean,
}