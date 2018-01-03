//@flow
import type {Theme} from 'theme'

export type Themeable = {
    primary?: boolean,
    info?: boolean,
    success?: boolean,
    warn?: boolean,
    danger?: boolean,
    default?: boolean,
    themeable?: Theme,
}