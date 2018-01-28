//@flow
import { injectGlobal } from 'styled-components'
import ionicons from 'ionicons/dist/fonts/ionicons.woff'

const fontFace = ({font, fontFamily}: {
    font: string,
    fontFamily: string
  }) => {
	return `
      @font-face {
        font-family: ${fontFamily};
        src: url('${font}');
      }
    `
}

const icons = fontFace({font: ionicons, fontFamily: 'Ionicons' })

export default () => injectGlobal`${icons}`