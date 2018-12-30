import { sortHandlers } from "../../src/reducers/thunk";
import { SORT_ORDER } from "../../src/actions/type"; 
import { wordListAsc, wordListDesc, wordListDateNewer, wordListDateOlder } from '../storage/sort';
describe('sortHandlers', () => {
  it('sort words array in the way of ascending', () => {
    const copyWLDesc = JSON.parse(JSON.stringify(wordListDesc));
    copyWLDesc.sort(sortHandlers[SORT_ORDER.ALPHA_ASC]);
    expect(copyWLDesc).toEqual(wordListAsc)
  })

  it('sort words array in the way of descnding', () => {
    const copyWLAsc = JSON.parse(JSON.stringify(wordListAsc));
    copyWLAsc.sort(sortHandlers[SORT_ORDER.ALPHA_DESC]);
    expect(copyWLAsc).toEqual(wordListDesc)
  })

  it('sort words array in the way of date newer', () => {
    const copyWLOlder = JSON.parse(JSON.stringify(wordListDateOlder));
    copyWLOlder.sort(sortHandlers[SORT_ORDER.DATE_NEWER]);
    expect(copyWLOlder).toEqual(wordListDateNewer)
  })

  it('sort words array in the way of date older', () => {
    const copyWLNewer = JSON.parse(JSON.stringify(wordListDateNewer));
    copyWLNewer.sort(sortHandlers[SORT_ORDER.DATE_OLDER]);
    expect(copyWLNewer).toEqual(wordListDateOlder)
  })
})

