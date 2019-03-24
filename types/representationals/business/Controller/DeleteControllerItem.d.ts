import * as React from 'react';
interface Props {
    className?: string;
    deleteWordClick: () => void;
}
/**
 * #REFACTOR (ticket#9)
 *  - it is impossible to delete word which is newly created (just click the "new" controller and it does not saved yet)
 *  - this because "delete" and other opeartion has different implementation. ex, if user click "new" or modify the word form, those changes are not saved immediately. rather wait for the user clicking 'save' button. on the other hand, "delete" is immediate saving, which means that when user click "delete" button, app automatically save the change in redux state and remote.
 *  - for future, i think those operation should be consistent.
 **/
export declare class DeleteControllerItem extends React.PureComponent<Props, {}> {
    constructor(props: Props);
    onDeleteClick(e: React.MouseEvent<HTMLElement>): void;
    render(): JSX.Element;
}
export default DeleteControllerItem;
