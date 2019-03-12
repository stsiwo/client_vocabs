const flatten = require('lodash/flatten');

const extractDestroyImages: ( wordsState: any, wordsForm: any ) => any = ( wordsState, wordsForm ) => {

  // get images for destroying 
  const destroy = wordsState
    .map(( stateWord: any ) => {

      // check word in state exists in form
      const formWord = wordsForm.find(( wordForm: any ) => wordForm.id === stateWord.id );

      return stateWord.defs.filter(( stateDef: any ) => { 
        // existing word
        if ( formWord ) {

          const formDef = formWord.defs.find(( defForm: any ) => defForm.id === stateDef.id);
          // existing def
          if ( formDef ) {

            // existsing def's image is remvoed in state 
            if ( stateDef.image !== null && formDef.image === null) return true;

          } 
          // def is removed in form 
          else {

            // any removed def including image in form should be removed 
            if ( stateDef.image !== null ) return true;
          }
        } 
        // existing word itself is deleted 
        else {
           
          // state's word hold any defs which has image 
          if ( stateDef.image !== null ) return true; 

        }
        return false;
      })
    });
  
  return flatten(destroy); 
}


export default extractDestroyImages;

