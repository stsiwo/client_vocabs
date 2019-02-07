# client_vocabs
client side react SPA for Vocabs web application

## Refactoring Note
 - use "render props" and HOC to encapsulate to cross-cutting concern like modal feature (separate content of modal and modal itself)

### some of local commits were lost due to power down of this computer

 - those commits are following: 

* 85a2a4b - (2 hours ago) added testing for word form error thunk - sts-msys (HEAD -> react-work)
* 9f9898d - (2 hours ago) added define word warning on NavBar and abstract wordFormErrorCheckThunk - sts-msys
* cbeb4e2 - (24 hours ago) added BackControllerCont, backWordThunk, containers for checkWordFormError - sts-msys
* d97fe9f - (25 hours ago) added testing after formik implementation - sts-msys
* 2f182c3 - (27 hours ago) added wordFormError state to access validation error from outside form like constroller - sts-msys
* 4a5e07f - (28 hours ago) added error message (no css yet) of formik - sts-msys
* 1c31b3a - (29 hours ago) fixed error of image and create Image experiement component (this should be later when async stuff) - sts-msys
* 72da91e - (31 hours ago) implement formik in WordForm and also note that i switched how form data is kept from using redux to react state (formik) so temporary change in form does not affect redux state - sts-msys
* 9ae75f9 - (34 hours ago) implementing formik: added values and CustomFormikProp through WordForm - sts-msys
* bccb26d - (2 days ago) implemented formit in Experiement component - sts-msys
* fb7d155 - (2 days ago) implementing formki in Experiment component and figured out Yup validation - sts-msys
* 6a1a875 - (2 days ago) installed yup (validation shema) - sts-msys

 - be sure to commit to remote regularly 

## dependencies

  - node_modules/formik/dist/formik.esm.js

    - modified this file due to the bug:

      - modified code:

        FieldArrayInner.prototype.remove = async function (index) {
          var result;
          await this.updateArrayField(function (array) {
            var copy = array ? array.slice() : [];

            if (!result) {
              result = copy[index];
            }

            if (isFunction(copy.splice)) {
              copy.splice(index, 1);
            }

            return copy;
          }, true, true);
          return result;
        };

      - original code:

        FieldArrayInner.prototype.remove = function (index) {
          var result;
          this.updateArrayField(function (array) {
            var copy = array ? array.slice() : [];

            if (!result) {
              result = copy[index];
            }

            if (isFunction(copy.splice)) {
              copy.splice(index, 1);
            }

            return copy;
          }, true, true);
          return result;
        };


