export const options = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": "0cd66b2080msh9fdda454b4dbaa1p1e62e5jsn49adcddb9186",
    "X-RapidAPI-Host": "exerciseapi3.p.rapidapi.com",
  },
};

export const fetchData = async (url, option) => {
  const response = await fetch(url, option);
  const data = await response.json();
  return data;
};
