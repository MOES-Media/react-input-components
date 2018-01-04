//@flow
import type {ColorConfig, TextConfig} from 'types'
import {default as colors} from 'theme/colors'
import {default as text} from 'theme/text'

export type Theme = {
    colors: ColorConfig,
    text: TextConfig
}

export default {
    colors,
    text
}
