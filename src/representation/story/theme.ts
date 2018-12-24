// theme.ts
export default interface ThemeInterface {
  primaryColor: string;
  secondaryColor: string;
  thirdColor: string;
  thirdColorOpacity: string;

  primaryFontColor: string;
  secondaryFontColor: string;

  primaryFontFamily: string;

  mobileS: string;
  mobileM: string;
  mobileL: string;
  tablet: string;
  laptop: string;
  laptopL: string;
  fourk: string;

  headerHeight: string;
  navBarWidth: string;

  primaryOverlayColor: string;
}

export const theme: ThemeInterface = {
  primaryColor: '#00C00D',
  secondaryColor: '#7CE383',
  thirdColor: '#5BEA17',
  thirdColorOpacity: 'rgba(89, 233, 22, 0.4)',
  primaryFontColor:  '#000000',
  secondaryFontColor:  '#FFFFFF',

  primaryFontFamily: "'Cabin', sans-seif",

  mobileS: '356px',
  mobileM: '400px',
  mobileL: '520px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  fourk: '2560px',

  headerHeight: '50px',
  navBarWidth: '100px',

  primaryOverlayColor: 'rgba(89, 233, 22, 0.4)',
}
