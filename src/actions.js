const submit = weather => {
  return {
    type: "SUBMIT_INPUT",
    payload: weather
  };
};
const autoWeather = weather => {
  return {
    type: "AUTO_WEATHER",
    payload: weather
  };
};
const getCity = city => {
  console.log("getCity");
  return {
    type: "GET_CITY",
    payload: city
  };
};
const setIncorrectCity = () => {
  return {
    type: "INCORRECT_CITY_INPUT"
  };
};
const setCorrectCity = () => {
  return {
    type: "CORRECT_CITY_INPUT"
  };
};

export { submit, autoWeather, getCity, setIncorrectCity, setCorrectCity };
