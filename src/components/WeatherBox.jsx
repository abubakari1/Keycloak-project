import React from "react";
import { Route, Switch } from "react-router-dom";
import WeatherDetails from "./WeatherDetails";
import Menu from "./Menu";
import WeatherDetailsSecret from "./WeatherDetaisSecret";
import NoMatch from "./NoMatch";
import RolesRoute from "./RolesRoute";
import FetchWeather from "./FetchWeather";

const WeatherBox = () => {
  return (
    <>
      <Menu />
      <Switch>
        <Route exact path="/">
            <WeatherDetails/>
        </Route>
        <RolesRoute path="/secret" roles={['admin']}>
          <FetchWeather/>
        </RolesRoute>
        <RolesRoute path="/weather/new" roles={['user']}>
          <WeatherDetailsSecret />
        </RolesRoute>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </>
  );
};

export default WeatherBox;
