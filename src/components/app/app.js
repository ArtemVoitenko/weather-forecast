import React, { Component } from "react";
import { withWeatherService } from "../hoc";
import Input from "../input";
import { autoWeather } from "../../actions";
import { connect } from "react-redux";
import ErrorIndicator from "../error-indicator";
import Preloader from "../preloader";
import WeekChart from "../charts/week-chart";
import CurrentWeather from "../current-weather";
import "./app.scss";
import "./normilize.css";
class App extends Component {
  state = {
    loading: true
  };
  componentDidMount() {
    this.getCurrentLocation()
      .then(res => {
        return this.props.weatherService.getForecast(...res);
      })
      .then(weather => {
        this.props.autoWeather(weather);
        this.setState({ loading: false });
      });
  }
  getCurrentLocation() {
    const getPreciseLocation = () => {
      var geo = navigator.geolocation;
      return new Promise(function(resolve) {
        geo.getCurrentPosition(function(position) {
          resolve([position.coords.latitude, position.coords.longitude]);
        });
      });
    };
    return getPreciseLocation();
  }
  render() {
    const { loading } = this.state;
    if (loading === false) {
      if (this.props.data.loading) {
        return <div />;
      } else {
        return (
          <div className="container">
            <div className="weather-main">
              <Input />
              <CurrentWeather />
            </div>
            <div className="charts">
              <WeekChart />
            </div>
          </div>
        );
      }
    } else {
      return <Preloader />;
    }
  }
}
const mapStateToProps = state => {
  return { data: state };
};
const mapDispatchToProps = {
  autoWeather
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withWeatherService()(App));
