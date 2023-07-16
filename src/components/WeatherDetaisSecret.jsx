import React from "react";
import weatherData from "./weatherdata.json";
import { Typography, Card, CardContent } from "@material-ui/core";

const WeatherDetailsSecret = () => {
  return (
    <div>
      <Typography variant="h1">Weather for Admin</Typography>
      {weatherData.map((weather) => (
        <Card key={weather.date} style={{ marginBottom: "16px" }}>
          <CardContent>
            <Typography variant="h6">Date: {weather.date}</Typography>
            <Typography variant="body1">
              Temperature: {weather.temperatureC}°C / {weather.temperatureF}°F
            </Typography>
            <Typography variant="body1">
              Summary: {weather.summary}
            </Typography>
            <Typography variant="body1">
              Humidity: {weather.humidity}
            </Typography>
            <Typography variant="body1">
              TempratureF: {weather.temperatureF}
            </Typography>
            
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default WeatherDetailsSecret;
