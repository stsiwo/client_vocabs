import * as qs from 'query-string';

type GetImageSearchApiUrl = ( keyWord: string ) => string;

const getImageSearchApiUrl: GetImageSearchApiUrl = ( keyWord ) => {
  
  let baseUrl = "https://www.googleapis.com/customsearch/v1?" 

  const param = {
    key: process.env.IMAGE_SEARCH_API_KEY,
    cx: process.env.IMAGE_SEARCH_ENGINE_ID,
    searchType: "image",
    q: keyWord,
  }

  return baseUrl + qs.stringify(param);
}

export default getImageSearchApiUrl;
