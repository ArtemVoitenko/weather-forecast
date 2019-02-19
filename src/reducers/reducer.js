const initialState = {
  actualWeather: "",
  loading: true,
  city: "",
  isCorrectCity: true
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SUBMIT_INPUT": {
      return {
        ...state,
        actualWeather: action.payload
      };
    }
    case "AUTO_WEATHER": {
      return {
        ...state,
        actualWeather: action.payload,
        loading: false
      };
    }
    case "GET_CITY": {
      console.log("reducer");
      return {
        ...state,
        city: action.payload
      };
    }
    case "INCORRECT_CITY_INPUT": {
      return {
        ...state,
        isCorrectCity: false
      };
    }
    case "CORRECT_CITY_INPUT": {
      return {
        ...state,
        isCorrectCity: true
      };
    }
  }
};
export default reducer;
