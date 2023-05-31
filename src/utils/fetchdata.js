export const fetchData = async (url, option) => {
  const response = await fetch(url, option);
  const data = await response.json();
  return data;
};
