export const getHostInformation = () => {
  return "";
};

export const POSTCORS = (data) => {
  return ({
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      "X-ACCESS-TOKEN":
        "",
    }
  })
}

export const CORS = {
  headers: {
    "X-ACCESS-TOKEN":
      "",
  },
};
