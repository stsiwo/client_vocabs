type GetVocabsApiUrl = () => string;

const getVocabsApiUrl: GetVocabsApiUrl = () => {
  return process.env.NODE_ENV === "production" ? process.env.VOCABS_API_URL_PROD : process.env.VOCABS_API_URL_DEV;
}

export default getVocabsApiUrl;
