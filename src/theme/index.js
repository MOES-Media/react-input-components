//@flow
import type {ColorConfig} from 'types'
import {default as colors} from 'theme/colors'
import {default as text} from 'theme/text'

export type Theme = {
    colors: ColorConfig
}

export default {
    colors,
    text
}
