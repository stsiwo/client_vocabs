# client_vocabs
client side react SPA for Vocabs web application

## Refactoring Note
 - ticket#1: implement automate refresh token request when access token is expired. but how? need some timer to send request before expires?
 - ticket#2: LastPass chrom extension error when implementing key press event handler. i don't know how to fix.
 - ticket#3: implement formik async validation rather than sync to avoid lag every time put input
 - ticket#4: redirect user to /word after saving at /word/detail
 - ~~ticket#5: allow user to delete the first definition of a word at /word/detail. add trash icon at the first definition.~~
 - ticket#6: figure out the place of dispatch an action for form error exist
 - ticket#7: implement "no search result" message or flash card when search word
 - ticket#8: fix fetch initial word every time WordList is mounted. don't need to fetch every time because data is also stored in redux state
 - ticket#9: consistent crud operation of controller. see detail at "DeleteControllerItem" component 
## production
 - typescript compilation time takes forever with ubuntu 16.04 (my server)
   - some "import" statement seem cause this issue but i don't know why
   - current work around is to use options such as "useCache: true" and "transpileOnly: true" in "awesome-typescript-loader". this improves a lot of time :)

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


