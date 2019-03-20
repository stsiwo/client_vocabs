import * as React from 'react';
import { Subject, Subscription } from 'rxjs';
import { ObservableBags } from './type';
interface Props {
    render: (state: ObservableBags) => React.ReactNode;
}
/**
 * using formik form props as Producer cause input lag
 *  - I don't know why but better to create state in Observable then use it as Producer so you can avoid lag problem
 **/
declare class Observable extends React.PureComponent<Props, ObservableBags> {
    observable: Subject<string>;
    subscription: Subscription;
    constructor(props: Props);
    componentDidMount(): void;
    componentWillUnmount(): void;
    inputHandler(e: React.ChangeEvent<HTMLInputElement>): void;
    emptyInput(): void;
    isInputEmpty(): boolean;
    render(): JSX.Element;
}
export default Observable;
