export const exerciseData = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0cd66b2080msh9fdda454b4dbaa1p1e62e5jsn49adcddb9186",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
export const youTubeoptions = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": "0cd66b2080msh9fdda454b4dbaa1p1e62e5jsn49adcddb9186",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};
export const getdata = async (url, option) => {
  const response = await fetch(url, option);
  const data = await response.json();
  return data;
};
