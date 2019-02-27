import * as uuid from 'uuid'; 
const getUuid: () => string = () => {
  const id: string = uuid.v4();
  return id;
}
export default getUuid;


