import partlyCloudy from "../components/charts/icons/partly-cloudy.png";
import rainy from "../components/charts/icons/rainy.png";
import clearSky from "../components/charts/icons/sun.png";
import snowy from "../components/charts/icons/snowy.png";
import cloudy from "../components/charts/icons/cloudy.png";
import windy from "../components/charts/icons/windy.png";
import foggy from "../components/charts/icons/foggy.png";
export const determineImage = weatherIcon => {
  switch (weatherIcon) {
    case "partly-cloudy-day":
    case "partly-cloudy-night": {
      return partlyCloudy;
    }
    case "clear-day":
    case "clear-night": {
      return clearSky;
    }
    case "rain": {
      return rainy;
    }
    case "cloudy": {
      return cloudy;
    }
    case "snow": {
      return snowy;
    }
    case "wind": {
      return windy;
    }
    case "fog": {
      return foggy;
    }
  }
};
