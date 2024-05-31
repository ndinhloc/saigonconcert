const API_BASE_URL = "https://api.saigonconcert.com/api/v1/";

export const API = {
  getPage(code) {
    return `${API_BASE_URL}pages/find-by-page-code?pageCode=${code}`;
  },
  getPostCategory: `${API_BASE_URL}/post-categories?limit=5&page=1`,
  getPost(limit, page, category, orderBy, sort) {
    return `${API_BASE_URL}posts?${orderBy ? `orderBy=${orderBy}` : ""}${
      sort ? `&order=${sort}` : ""
    }&limit=${limit}&page=${page}${category ? `&category=${category}` : ""}`;
  },
  getPostCategory: `${API_BASE_URL}post-categories?limit=5&page=1`,
  postDetail(slug) {
    return `${API_BASE_URL}posts/${slug}`;
  },
  relatedPost(slug) {
    return `${API_BASE_URL}posts/related/${slug}`;
  },
  getShow(limit, page, category) {
    return `${API_BASE_URL}shows?limit=${limit}&page=${page}${
      category ? `&category=${category}` : ""
    }&previous=3000-01-01&upcoming=1000-01-01`;
  },
  showDetail(slug) {
    return `${API_BASE_URL}shows/${slug}`;
  },
  showCategory: `${API_BASE_URL}show-categories?limit=5&page=1`,
  services: `${API_BASE_URL}services?orderBy=createdAt&order=ASC&limit=5&page=1`,
  galleryCategory: `${API_BASE_URL}gallery-categories?limit=5&page=1`,
  gallery: `${API_BASE_URL}galleries?limit=10&page=1`,
};
