import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import Parser from 'rss-parser';

const FetchWeather = () => {
  const [weatherNews, setWeatherNews] = useState([]);

  useEffect(() => {
    const fetchWeatherNews = async () => {
      try {
        const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
        const parser = new Parser();
        const feed = await parser.parseURL(
          CORS_PROXY + 'https://www.nasa.gov/rss/dyn/hurricaneupdate.rss'
        );
        setWeatherNews(feed.items);
      } catch (error) {
        console.error('Error fetching weather news:', error);
      }
    };

    fetchWeatherNews();
  }, []);

  return (
    <div>
      {weatherNews.map((item, index) => (
        <Card key={index} sx={{ maxWidth: 400, marginBottom: '20px' }}>
          <CardMedia
            component="img"
            height="200"
            image={item.enclosure.url}
            alt="Weather"
          />
          <CardContent>
            <Typography variant="h6" component="div">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.pubDate}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FetchWeather;
