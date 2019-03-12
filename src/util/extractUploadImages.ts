const flatten = require('lodash/flatten');
/**
 * extract images to be uploaded after user editted the word form
 *  - need to compare redux state with the form
 *  
 *  - think the best way to describe this concept
 *  - #NEED_IMPLEMENT
 **/
const extractUploadImages: ( wordsState: any, wordsForm: any ) => any = ( wordsState, wordsForm ) => {

  // get images for uploading 
  const upload = wordsForm
    .map(( formWord: any ) => {

      // check word in form exists in state
      const stateWord = wordsState.find(( wordState: any ) => wordState.id === formWord.id );

      return formWord.defs.filter(( formDef: any ) => { 
        // existing word
        if ( stateWord ) {

          // check def in form exists in state
          const stateDef = stateWord.defs.find(( defState: any ) => defState.id === formDef.id);
          // existing def
          if ( stateDef ) {

            // for the case: new image is added to existing def
            if ( stateDef.image === null && formDef.image !== null ) return true;

            // for the case: image of existing def is updated/replaced 
            if ( 
              stateDef.image !== null && 
              formDef.image !== null &&
              formDef.image !== stateDef.image 
            ) return true;

          } 
          // def in form deos not exist in state; newly added def 
          else {

            // def image is not null, it should be uploaded 
            if ( formDef.image !== null ) return true;
          }
        } 
        // word in form does not exist in state; newly added word 
        else {
           
          // form's word hold any defs which has image 
          if ( formDef.image !== null ) return true; 

        }
        return false;
      });
    });
  
  return flatten(upload);
}


export default extractUploadImages;

