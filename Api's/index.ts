import axios from "axios";

const baseUrl =
  "https://stage-api.projecthero.in/gateway/review-website";

export const fetchRootCategories = () => {
  return axios.get(`${baseUrl}/categories`);
};

export const fetchPrimaryCategories = (rootCategory: string) => {
  return axios.get(`${baseUrl}/categories?root=${rootCategory}`);
};

export const fetchSecondaryCategories = (
  rootCategory: string,
  primaryCategories: string[]
) => {
  const queryParams = "workTypes=" + primaryCategories.join(",");
  return axios.get(`${baseUrl}/categories?root=${rootCategory}&${queryParams}`);
};

export const fetchAllUsers = async (
  root?: string,
  primaryCategories?: string[],
  pageSize?: number,
  pageNumber?: number,
  location?: string ,
  searchText?: string
) => {
  const searchUrl =
    "https://stage-api.projecthero.in/gateway/review-website/customer/search";

  if(primaryCategories?.length )primaryCategories.join(',');

  const response= await axios.get(searchUrl, {
    params: {
      root: root,
      primarySpecializations: primaryCategories,
      pageSize: pageSize,
      pageNumber: pageNumber,
      searchText: searchText,
      state: location,
    },
  });
  // console.log(response.data);
  
  return response; 

};

export const fetchUserDetails = async (userId?: string) => {
  return await axios.get(`${baseUrl}/customer/${userId}/detailsV2`);
};

export const fetchAllReviews = async (
  userId?: string,
  pageNumber?: number,
  pageSize?: number
) => {
  // if (!pageNumber && !pageSize) {
  //   return await axios.get(`${baseUrl}/customer/${userId}/reviews`);
  // } else {
  return await axios.get(
    `${baseUrl}/customer/${userId}/reviews?page=${pageNumber}&size=${pageSize}`
  );
};

export const fetchSimilarProfiles = async (category?: string) => {
  return await axios.get(
    `https://stage-api.projecthero.in/gateway/review-website/similar-profiles?root=${category}`
  );
};
