//import { css } from "../../story/styledComponents";
//import { theme } from "../../story/theme";
//// Iterate through the theme.sizes and create a media template
//type IMediaType = Record<keyof typeof theme.sizes, (l: TemplateStringsArray, ...p: any[]) => string>;

//export const maxMedia = Object.keys(theme.sizes).reduce((acc, label) => {
  //acc[label] = (literals: TemplateStringsArray, ...placeholders: any[]) => css`
    //@media (max-width: ${theme.sizes[label] / 16}em) {
      //${css(literals, ...placeholders)}
    //}
  //`
  //return acc
//}, {} as IMediaType)

//export const minMedia = Object.keys(theme.sizes).reduce((acc, label) => {
  //acc[label] = (literals: TemplateStringsArray, ...placeholders: any[]) => css`
    //@media (min-width: ${theme.sizes[label] / 16}em) {
      //${css(literals, ...placeholders)}
    //}
  //`
  //return acc
//}, {} as IMediaType)
