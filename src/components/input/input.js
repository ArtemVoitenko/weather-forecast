import React, { Component } from "react";
import { submit } from "../../actions";
import { connect } from "react-redux";
import { withWeatherService } from "../hoc";
import { setIncorrectCity, setCorrectCity } from "../../actions";
import "./input.scss";
import Icon from "../Icon";
class Input extends Component {
  state = {
    inputValue: "",
    loading: true
  };
  onInput = e => {
    const val = e.target.value;
    this.setState({
      inputValue: val
    });
  };
  onSubmit = () => {
    const actualWeather = this.props.weatherService
      .getGeocode(this.state.inputValue)
      .then(result => {
        return [result[1].lat, result[1].lon];
      })
      .then(result => {
        return this.props.weatherService.getForecast(...result);
      })
      .then(result => {
        this.props.submit(result);
        this.props.setCorrectCity();
        this.setState({
          loading: false
        });
      })
      .catch(() => {
        this.props.setIncorrectCity();
      });
  };

  render() {
    return (
      <div className="input__wrapper">
        <input
          className="input"
          type="text"
          placeholder="Location?"
          value={this.state.inputValue}
          onChange={this.onInput}
        />
        <button type="button" className="input__submit" onClick={this.onSubmit}>
          <Icon icon="send" />
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { query: state };
};
const mapDispatchToProps = {
  submit,
  setIncorrectCity,
  setCorrectCity
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withWeatherService()(Input));
