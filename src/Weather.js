import React, { useEffect } from 'react';
import axios from 'axios';

function Weather() {
  const [data, setData] = React.useState([])
  useEffect(() => {
    axios.get("https://api.openweathermap.org/data/2.5/weather?lat=72.5714&lon=23.0225&appid=96c28548defab04c779d3931a1569aac")
      .then(response => {
        setData(response.data.main.temp);
        console.log(response.data.main.temp);
      })
  })
  return (
    <div>
      <form>
        <h1>weather App</h1>
        <h1>{data}</h1>
      </form>
    </div>
  );
}

export default Weather;
