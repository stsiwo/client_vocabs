import * as React from 'react';
import { AutoCompleteBags } from './type';
import { ObservableBags } from '../Observable/type';
interface Props {
    className?: string;
    render: (state: AutoCompleteBags) => React.ReactNode;
}
interface PropsWithObservable extends Props {
    observable: ObservableBags;
}
declare class AutoComplete extends React.PureComponent<PropsWithObservable, AutoCompleteBags> {
    private liRefs;
    private divRef;
    constructor(props: PropsWithObservable);
    renderAutoCompleteItem(): JSX.Element[];
    handleAutoCompleteItemClick(e: React.MouseEvent<HTMLLIElement>): void;
    /**
     * the error caused by using key event on non-input element
     *  - detail: Assertion failed: Input argument is not an HTMLInputElement
            getFormProfile @ onloadwff.js:71
            setFieldValue @ onloadwff.js:71
            formKeydownListener @ onloadwff.js:71
            onloadwff.js:71 Uncaught TypeError: Cannot read property 'type' of undefined
          at e.setFieldValue (onloadwff.js:71)
          at HTMLFormElement.formKeydownListener (onloadwff.js:71)
        - this is because of LastPass (chrome extension)
        - solution: I don't know how to fix this
          #REFACTOR (ticket#2)
     **/
    handleAutoCompleteItemKeyPress(e: React.KeyboardEvent<HTMLLIElement>): void;
    componentWillMount(): void;
    componentWillUnmount(): void;
    handleCloseAutoCompleteClick(e: Event): void;
    handleCloseAutoCompleteFocusIn(e: Event): void;
    setAutoCompleteClose(): void;
    isAutoCompleteOpen(): boolean;
    render(): JSX.Element;
}
/**
 * animation CSS
 *  - use combination of transform and transition together
 *  - better performance
 *  - more flexible than only using transition
 *    - ex1: transition with height or width
 *      - only transition: child element is not included in animation
 *      - transform/transition: any child element is also included for the animation
 *    - ex2: transform-origin is super useful: allow you to decide origin (e.g., x and y position) of animation, so based on the origin, the animation is applied
 *
 *
 **/
declare const StyledAutoComplete: import("styled-components").StyledComponent<typeof AutoComplete, import("../../representationals/story/theme").ThemeInterface, {}, never>;
export default StyledAutoComplete;
