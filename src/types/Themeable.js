//@flow
import type {Theme} from './theme'

export type Themeable = Theme & {
    primary?: boolean,
    info?: boolean,
    success?: boolean,
    warn?: boolean,
    danger?: boolean,
    default?: boolean,
    overrideDefault?: boolean,
}