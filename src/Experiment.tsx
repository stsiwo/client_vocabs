import * as React from 'react';
import { withFormik, InjectedFormikProps } from 'formik';
import * as Yup from 'yup';

interface IDef {
  def: string;
}

interface IWord {
  name: string;
  defs: IDef[]; 
}

// words validation schema
//const WordsValidationSchema = Yup.object().shape({
  //words: Yup.array().of(Yup.object().shape({
    //name: Yup.string().required("required"),
    //defs: Yup.array().of(Yup.object().shape({
      //def: Yup.string().required("required"),
    //})),
  //})),
//});

const WordsValidationSchema = Yup.object().shape({
  words: Yup.array().of(Yup.object().shape({
    name: Yup.string().required("required"),
    defs: Yup.array().of(Yup.object().shape({
      def: Yup.string().required("required"),
    }))
  }))
})

//const arrayVAlidationSchema = Yup.object().shape({
  //myArray: Yup.array().of(Yup.object().shape({
    //name: Yup.string().required("required"),
  //})),
//});

//const validationSchema = Yup.object().shape({
  //name: Yup.string().required("required"),
//})

const testWords = [
  {
    name: "test1",
    defs: [
      {
        def: "def1",
      },
      {
        def: "def1",
      },
      {
        def: "def1",
      },
      {
        def: "def1",
      },
    ]
  },
  {
    name: "test2",
    defs: [
      {
        def: "def2",
      },
      {
        def: "def2",
      },
      {
        def: "def2",
      },
      {
        def: "def2",
      },
    ]
  },
]

//const testArray = [
  //{
    //name: "satoshi",
  //},
  //{
    //name: "hitomi",
  //},
  //{
    //name: "kaoru",
  //},
  //{
    //name: "yoich",
  //},
  //{
    //name: "seiko",
  //},
//]

interface Props  {
  words: IWord[];
  //name: string;
  //myArray: { name: string }[];
}

interface FormValues {
  words: IWord[];
  //name: string;
  //myArray: { name: string }[];
}

class Experiment extends React.Component<InjectedFormikProps<Props, FormValues>, {}> {
  constructor(props: InjectedFormikProps<Props, FormValues>) {
    super(props);
    this.renderWordForm = this.renderWordForm.bind(this);
  }

  renderWordForm() {

    //return this.props.values.myArray.map(( item, index ) => {
      //return (
        //<div key={ index }>
          //<input 
            //type="text" 
            //value={ item.name } 
            //name={ `myArray.${ index }.name` } 
            //onChange={ this.props.handleChange } 
            //onBlur={ this.props.handleBlur }
          ///>
        //</div>
      //)
    //});

    return this.props.values.words.map(( word, wordIndex ) => {
      return (
        <div key={ wordIndex }>
        {/*
          is there any clean way to display this error message???
          */}
          { this.props.errors.words && this.props.touched.words  && this.props.errors.words[wordIndex] && this.props.touched.words[wordIndex] && this.props.errors.words[wordIndex].name &&this.props.touched.words[wordIndex].name ? ( <div>{ this.props.errors.words[wordIndex].name} </div> ): null  } 
          <input 
            type="text" 
            value={ word.name } 
            name={ `words.${ wordIndex }.name` } 
            onChange={ this.props.handleChange } 
            onBlur={ this.props.handleBlur }
          />
          { word.defs.map(( def, defIndex ) => {
            return (
              <div key={ defIndex }>
              {/*
                { this.props.errors.words && this.props.errors.words[wordIndex].defs[defIndex].def && this.props.touched.words[wordIndex].defs[defIndex].def ? ( <div>this.props.errors.words[wordIndex].defs[defIndex].def</div> ): null  } 
                */}
                <input 
                  type="text" 
                  value={ def.def } 
                  name={ `words.${ wordIndex }.defs.${ defIndex }.def` } 
                  onChange={ this.props.handleChange } 
                  onBlur={ this.props.handleBlur }
                />
              </div>
            )
          })}
        </div>
      )
    })
  }

  render() {
    console.log(this.props);
    return (
      <form onSubmit={ this.props.handleSubmit } >
       
      {/*
        <input 
        type="text" 
        value={ this.props.values.name }
        onChange={ this.props.handleChange }
        onBlur={ this.props.handleBlur }
        name="name"
        />
        */}
        { this.renderWordForm() }
        <button type="submit" >submit</button>
      </form>
    );
  }
}

const FormExperience = withFormik<Props, FormValues>({
    // change props of this wrapping component into form values: set initial form values here
    mapPropsToValues: props => {
      return {
        words: props.words,
        //name: props.name,
        //myArray: props.myArray,
      };
    },

    // better to use validation schema (like Yup)
    // can be synchronous or asynchronous
    // return FormikErrors or Promise
    //validate: (values: FormValues) => {
      //let errors: FormikErrors<FormValues> = {};
      //return errors;
    //},

    // handle submit with submitted form values and extra object called "FormikBag"
    // FormikBag: includes props passed to wrapped component and some useful functions (see doc)
    handleSubmit: (values: FormValues) => {
      console.log(values); 
    },

    validationSchema: () => WordsValidationSchema,
})(Experiment);

const Form: React.SFC<{}> = () => {
  return <FormExperience words={ testWords } /*name="satoshi"*/ /*myArray={ testArray }*/ />
}
export default Form;

