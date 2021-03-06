import { PosEnum } from './pos';

export interface IDef {
  id: string;
  posId: PosEnum;
  def: string;
  image: string; // path of image 
  wordId: string;
  imageFile?: File;
}


