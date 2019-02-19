import React, { Component } from "react";
import { connect } from "react-redux";
import { getTime } from "../../methods/convert-data-menthods";
import { withWeatherService } from "../hoc";
import { toCelsius } from "../../methods/convert-weather-values";
import "./current-weather.scss";
import { determineImage } from "../../methods/common-methods";
import { getCity } from "../../actions";
import Icon from "../Icon";
const CurrentWeather = ({
  apparent,
  summary,
  temp,
  maxTemp,
  maxTempTime,
  minTemp,
  minTempTime,
  currentTime,
  location,
  currentIcon
}) => {
  return (
    <div>
      <div className="current-weather">
        <div className="current-weather__major">
          <div className="current-weather__temperature">
            {temp}
            <sup>{"\u00b0"}C</sup>
            <p className="current-weather__apparent">
              Feels like: {apparent}
              <sup>{"\u00b0"}C</sup>
            </p>
          </div>
          <img src={currentIcon} alt="" className="current-weather__img" />
        </div>
        <p className="current-weather__status">{summary}</p>
        <div className="current-weather__records">
          <div className="current-weather__record">
            <p className="current-weather__record-temp tempMax">
              {maxTemp}
              <sup>{"\u00b0"}C</sup>
            </p>
            <p className="current-weather__record-time">at {maxTempTime}</p>
          </div>
          <div className="current-weather__record">
            <p className="current-weather__record-temp tempMin">
              {minTemp}
              <sup>{"\u00b0"}C</sup>
            </p>
            <p className="current-weather__record-time">at {minTempTime}</p>
          </div>
        </div>
        <div className="current-weather__additional">
          <div className="current-weather__date">
            <Icon icon="calendar" />
            {currentTime}
          </div>
          <div className="current-weather__location">
            <Icon icon="location" />
            {location}
          </div>
        </div>
      </div>
    </div>
  );
};
class CurrentWeatherContainer extends Component {
  state = {
    loading: true,
    data: {}
  };
  componentDidMount() {
    this.prepareRenderData();
  }
  componentDidUpdate(prevProps) {
    if (
      this.props.forecast.actualWeather !== prevProps.forecast.actualWeather
    ) {
      console.log("hello");
      this.prepareRenderData();
    }
  }
  prepareRenderData() {
    const {
      actualWeather: {
        currently: { apparentTemperature, summary, temperature, time, icon },
        daily: { data },
        latitude,
        longitude
      }
    } = this.props.forecast;
    const temp = toCelsius(temperature);
    const maxTemp = toCelsius(data[0].temperatureMax);
    const minTemp = toCelsius(data[0].temperatureMin);
    const maxTempTime = getTime(data[0].temperatureMaxTime);
    const minTempTime = getTime(data[0].temperatureMinTime);
    const apparent = toCelsius(apparentTemperature);
    const currentTime = new Date(time * 1000).toDateString();
    const currentIcon = determineImage(icon);
    const location = this.props.weatherService
      .getCityData(latitude, longitude)
      .then(res => {
        let city = "";
        if (res.address.hasOwnProperty("town")) {
          city = res.address.town;
        } else {
          city = res.address.city;
        }

        this.props.getCity(city);

        const formattedLocation = `${city}, ${res.address.country}, lat: ${
          res.lat
        }, long: ${res.lon}`;

        return formattedLocation;
      })
      .then(formattedData => {
        this.setState({
          data: {
            maxTemp,
            minTemp,
            maxTempTime,
            minTempTime,
            location: formattedData,
            apparent,
            summary,
            temp,
            currentTime,
            currentIcon
          }
        });
      });
  }
  render() {
    const { data } = this.state;
    return <CurrentWeather {...data} />;
  }
}

const mapStateToProps = state => {
  return {
    forecast: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getCity: city => {
      dispatch(getCity(city));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withWeatherService()(CurrentWeatherContainer));
