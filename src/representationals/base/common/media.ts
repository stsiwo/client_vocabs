import { css } from "../../story/styledComponents";
import { theme } from "../../story/theme";
// Iterate through the theme.sizes and create a media template

export const media = Object.keys(theme.sizes).reduce((acc, label) => {
  acc[label] = (literals: TemplateStringsArray, ...placeholders: any[]) => css`
    @media (max-width: ${theme.sizes[label] / 16}em) {
      ${css(literals, ...placeholders)}
    }
  `

  return acc
}, {} as Record<keyof typeof theme.sizes, (l: TemplateStringsArray, ...p: any[]) => string>)
