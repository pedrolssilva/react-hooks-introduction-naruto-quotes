export const getQuote = () => {
  return fetch(process.env.REACT_APP_API).then((response) => response.json());
};
