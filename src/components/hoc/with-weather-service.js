import React from "react";
import { DarkSkyServiceConsumer } from "../../dark-sky-context";

const withWeatherService = () => Wrapped => {
  return props => {
    return (
      <DarkSkyServiceConsumer>
        {weatherService => {
          return <Wrapped {...props} weatherService={weatherService} />;
        }}
      </DarkSkyServiceConsumer>
    );
  };
};

export default withWeatherService;
