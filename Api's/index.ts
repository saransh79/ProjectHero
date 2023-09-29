import axios from "axios";

const baseUrl = "https://stage-api.projecthero.in/gateway/review-website";

export const fetchCategories = async (
  rootCategory?: string,
  primaryCategories?: string[]
) => {
  const categoryUrl =
    "https://stage-api.projecthero.in/gateway/review-website/categories";

  const joinedPrimaryCategories = primaryCategories?.join(",");

  const response = await axios.get(categoryUrl, {
    params: {
      root: rootCategory,
      workTypes: joinedPrimaryCategories,
    },
  });
  return response;
};

export const fetchAllUsers = async (
  root?: string,
  primaryCategories?: string[],
  pageSize?: number,
  pageNumber?: number,
  location?: string,
  searchText?: string
) => {
  const searchUrl =
    "https://stage-api.projecthero.in/gateway/review-website/customer/search";

  const joinedPrimaryCategories = primaryCategories?.join(",");

  const response = await axios.get(searchUrl, {
    params: {
      root: root,
      primarySpecializations: joinedPrimaryCategories,
      pageSize: pageSize,
      pageNumber: pageNumber,
      searchText: searchText,
      state: location,
    },
  });
  return response;
};

export const fetchUserDetails = async (userId?: string) => {
  const url = `https://stage-api.projecthero.in/gateway/review-website/customer/${userId}/detailsV2`;
  return await axios.get(url);
};

export const fetchAllReviews = async (
  userId?: string,
  pageNumber?: number,
  pageSize?: number
) => {
  const url = `https://stage-api.projecthero.in/gateway/review-website/customer/${userId}/reviews`;
  return await axios.get(url, {
    params: {
      pageNumber: pageNumber,
      pageSize: pageSize,
    },
  });
};

export const fetchSimilarProfiles = async (category?: string) => {
  const url =
    "https://stage-api.projecthero.in/gateway/review-website/similar-profiles";
  const response = await axios.get(url, {
    params: {
      root: category,
    },
  });
  return response;
};

export const postReview = async (data: any) => {
  const url= "https://stage-api.projecthero.in/gateway/review-website/customer/review/create"
  return await axios.post(url, data);
};
