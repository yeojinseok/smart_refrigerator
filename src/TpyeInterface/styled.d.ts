import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    bgColor: string
    textColor: string
    accentBgColor: string
    accentTextColor: string
    button2: {
      bgColor: string,
      textColor: string,
      disableColor: string
      accentBgColor: string
      disableBorderColor: string
      disableTextColor: string
    }
  }
}
