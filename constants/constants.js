const DEV_MODE = true;
export const API_BASE =
  DEV_MODE === true ? "http://103.179.142.70:5001/api" : "/api";
export const API_URL = DEV_MODE === true ? "http://103.179.142.70:5001/" : "/";