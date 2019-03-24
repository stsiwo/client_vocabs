/**
 * does not want to use selectedWordList since every time user check word item, its state changes
 * which means input-selector's output also change,
 * which means memorization does not work at all
 **/
declare const makeGetWordListItemSelector: () => import("reselect").OutputParametricSelector<import("immutable").Record<import("../../state/type").IState>, {
    wordId: string;
}, {
    id: any;
    name: any;
    isChecked: boolean;
}, (res1: any, res2: boolean) => {
    id: any;
    name: any;
    isChecked: boolean;
}>;
export default makeGetWordListItemSelector;
