interface IScreenSizeType {
  mobileS: number;
  mobileM: number;
  mobileL: number;
  tablet: number;
  laptop: number;
  laptopL: number;
  fourk: number;
}

const ScreenSize: IScreenSizeType = {
  mobileS: 356,
  mobileM: 400,
  mobileL: 520,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  fourk: 2560,
}

// theme.ts
export default interface ThemeInterface {
  primaryColor: string;
  secondaryColor: string;
  thirdColor: string;
  thirdColorOpacity: string;

  primaryFontColor: string;
  secondaryFontColor: string;

  primaryFontFamily: string;

  sizes: IScreenSizeType;

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

  sizes: ScreenSize,  

  headerHeight: '50px',
  navBarWidth: '100px',

  primaryOverlayColor: 'rgba(89, 233, 22, 0.4)',
}
