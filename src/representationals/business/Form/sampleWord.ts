//import { posItem, posItems } from '../PosSelect/posItems';


//export interface IWord {
  //name: string;
  //defs: IDef[]; 
//} 

////interface ImageIF {
  ////name: string;
  ////src: string;
////}


//export interface IDef {
  //id: number;
  //pos: posItem;
  //def: string;
  //image: string;
  //[Symbol.iterator]: () => IterableIterator<any[]>;
//}



//export class Def implements IDef {
  //private _id: number;
  //private _pos: posItem;
  //private _def: string;
  //private _image: string;

  //constructor(id: number = 0, pos: posItem, def: string = "", image: string = "") {
    //this._id = id;
    //this._pos = pos;
    //this._def = def;
    //this._image = image;
  //}
  
  //get id(): number {
    //return this._id;
  //}

  //set id(id: number) {
    //this._id = id;
  //}

  //get pos(): posItem {
    //return this._pos;
  //}

  //set pos(pos: posItem) {
    //this._pos = pos;
  //}
  
  //get def(): string {
    //return this._def;
  //}

  //set def(def: string) {
    //this._def = def;
  //}

  //get image(): string {
    //return this._image;
  //}

  //set image(image: string) {
    //this._image = image;
  //}

  //[Symbol.iterator] = function* (this: Def) {
    //let properties: string[] = Object.keys(this);
    //for (let i of properties) {
      //yield [i, this[i]];
    //}
  //}   
//}

//export const sampleDefs = [
  //new Def(
    //0, 
    //posItems[0], 
    //"the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be send",
    //"sample-image-1"
  //),
  //new Def(
    //1, 
    //posItems[2], 
    //"the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be send",
    //"sample-image-1"
  //),
  //new Def(
    //2, 
    //posItems[4], 
    //"the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be send",
    //"sample-image-1"
  //),
  //new Def(
    //3, 
    //posItems[6], 
    //"the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be send",
    //"sample-image-1"
  //),
  //new Def(
    //4, 
    //posItems[7], 
    //"the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be send",
    //"sample-image-1"
  //),

//];


//export const sampleWord: IWord = {

  //name: "address",

  //defs: sampleDefs,
//}

