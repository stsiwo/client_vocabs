interface IScreenSizeType {
    mobileS: number;
    mobileM: number;
    mobileL: number;
    tablet: number;
    laptop: number;
    laptopL: number;
    fourk: number;
}
interface IFlashMessageType {
    success: string;
    error: string;
}
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
export declare const theme: ThemeInterface;
export {};
