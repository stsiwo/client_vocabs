import * as React from 'react';
import { FormValues } from '../../../Hoc/withForm';
import { IWord } from '../../../domains/word';
interface Props {
    className?: string;
    saveWordsClick: (wordForm: IWord[]) => void;
    formValues: FormValues;
}
export declare class SaveControllerItem extends React.PureComponent<Props, {}> {
    constructor(props: Props);
    /**
     * it might better to redirect user to /word page but later
     * #REFACTOR (ticket#4)
     **/
    onSaveClick(e: React.MouseEvent<HTMLElement>): void;
    render(): JSX.Element;
}
export default SaveControllerItem;
