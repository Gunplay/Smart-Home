export const getDataFromLS = property => {
  const data = localStorage.getItem(property);
  if (!data) return null;
  return JSON.parse(data);
};
