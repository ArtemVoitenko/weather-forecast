export const getDay = time => {
  const date = new Date(time * 1000).toDateString();
  const dateFormatted = date.split(" ");
  const finalData = `${dateFormatted[1]} ${dateFormatted[2]}`;
  return finalData;
};
export const getTime = time => {
  const date = new Date(time * 1000).toTimeString();
  return date.substr(0, 5);
};
