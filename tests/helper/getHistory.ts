import { createMemoryHistory } from 'history';

const getHistory = ( initialPath: string = '/word' ) => {
  return createMemoryHistory({
    initialEntries: [ initialPath ],
    initialIndex: 0,
  })
}

export default getHistory;
