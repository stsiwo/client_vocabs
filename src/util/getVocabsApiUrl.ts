type GetVocabsApiUrl = () => string;

const getVocabsApiUrl: GetVocabsApiUrl = () => {
  if (process.env.NODE_ENV === 'production') {
    return process.env.VOCABS_API_URL_PROD;
  } else if (process.env.NODE_ENV === 'development') {
    return process.env.VOCABS_API_URL_DEV;
  } else if (process.env.NODE_ENV === 'local'){
    return process.env.VOCABS_API_URL_LOCAL;
  }
  return null;
}

export default getVocabsApiUrl;
