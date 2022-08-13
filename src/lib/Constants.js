export const APIURL =
  process.env.NODE_ENV === "production"
    ? "https://api.hiyobi.me"
    : "http://localhost:3000/api";

export const CDNURL =
  process.env.NODE_ENV === "production"
    ? "https://cdn.hiyobi.me"
    : "http://localhost:3000/cdn";

export const TNURL =
  process.env.NODE_ENV === "production"
    ? "https://tn.hiyobi.me"
    : "http://localhost:3000";

// export const USERIMGURL = "https://userimg.hiyobi.me";

export const galleryCount = 15;
export const pagingCount = 10;

export const boardCount = 20;
export const boardPagingCount = 10;
