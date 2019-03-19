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
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  fourk: 2560,
}

interface IFlashMessageType {
  success: string;
  error: string;
}

const FlashMessageType: IFlashMessageType = {
  success: "#7CE383",
  error: "#f6b6d1"
}

// theme.ts
export interface ThemeInterface {
  primaryColor: string;
  secondaryColor: string;
  thirdColor: string;
  thirdColorOpacity: string;

  primaryFontColor: string;
  secondaryFontColor: string;

  primaryFontFamily: string;

  sizes: IScreenSizeType;

  headerHeight: number;
  navBarWidth: number;
  sideBarWidth: number;
  bottomBarHeight: number;
  bottomBarHeightMargin: number;

  primaryOverlayColor: string;

  flashMessageType: IFlashMessageType;
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

  headerHeight: 50,
  navBarWidth: 100,
  // wordlist when screen size >= mobileL
  sideBarWidth: 120,
  // worddetail when screen size >= mobileL
  bottomBarHeight: 50,
  bottomBarHeightMargin: 10,

  primaryOverlayColor: 'rgba(89, 233, 22, 0.4)',

  flashMessageType: FlashMessageType,
}
