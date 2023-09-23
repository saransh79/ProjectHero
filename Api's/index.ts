import axios from "axios";

export const baseUrl =
  "https://stage-api.projecthero.in/gateway/review-website";
// ?root=SUB_CONTRACTOR&workTypes=MASON%2CPAINTER%27";

export const reviewsApi =
  "https://stage-api.projecthero.in/gateway/review-website/customer/";

export const userDataApi =
  "https://stage-api.projecthero.in/gateway/review-website/customer/";

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

export const fetchAllUsers = (
  rootCategory?: string,
  primaryCategories?: string[]
) => {
  if (!rootCategory && primaryCategories?.length == 0) {
    return axios.get(`${baseUrl}/similar-profiles`);
  } else if (rootCategory && primaryCategories?.length == 0) {
    return axios.get(`${baseUrl}/similar-profiles?root=${rootCategory}`);
  } else {
    const queryParams = "workTypes=" + primaryCategories?.join(",");
    return axios.get(
      `${baseUrl}/similar-profiles?root=${rootCategory}&${queryParams}`
    );
  }
};
