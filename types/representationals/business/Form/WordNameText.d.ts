import * as React from 'react';
import { CustomFormikProps } from '../../../Hoc/withForm';
import { ObservableBags } from '../../../Hoc/Observable/type';
interface Props {
    className?: string;
    wordId: string;
    name: string;
    wordIndex: number;
    formik: CustomFormikProps;
    setFieldValue: (field: string, value: any) => void;
}
declare const _default: {
    new (props: Props): {
        renderWrappedComponent(observable: ObservableBags): JSX.Element;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Props>) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<Props>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Props>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Props>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Props>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Props>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Props>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Props>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Props>, nextState: Readonly<{}>, nextContext: any): void;
    };
    contextType?: React.Context<any>;
};
export default _default;
