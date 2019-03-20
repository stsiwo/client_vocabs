import * as React from 'react';
import { ThemeInterface } from '../../story/theme';
import { Location } from 'history';
interface Props {
    className?: string;
    isOpen?: boolean;
    isLogin: boolean;
    wordFormError: boolean;
    linkClick: (path: string) => void;
    signupClick: () => void;
    loginClick: () => void;
    isSignUpModalOpen: boolean;
    isLoginModalOpen: boolean;
    logoutClick: () => void;
    location: Location;
    onClose: () => void;
    onToggle: (e: React.MouseEvent<HTMLElement>) => void;
}
declare class NavBar extends React.PureComponent<Props, {}> {
    /**
     * this ref for closing navbar when outside is clicked
     *  - need to fix styled-components, typescript, and ref component issue
     **/
    private IconRef;
    constructor(props: Props);
    componentWillMount(): void;
    componentWillUnmount(): void;
    handleLink(e: React.MouseEvent<HTMLElement>): void;
    displaySignUpForm(e: React.MouseEvent<HTMLElement>): void;
    displayLoginForm(e: React.MouseEvent<HTMLElement>): void;
    logoutClick(e: React.MouseEvent<HTMLElement>): void;
    handleCloseOutsideClick(e: Event): void;
    render(): JSX.Element;
}
declare const StyledNavBar: import("styled-components").StyledComponent<typeof NavBar, ThemeInterface, {}, never>;
export default StyledNavBar;
