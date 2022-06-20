import moment from 'moment';

const getCurrentDayForecast = (data, title) => ({
    weekday: moment(data.timezone).format('dddd'),
    date: moment(data.timezone).format('MMMM Do'),
    location: data.name,
    temperature: data.main.temp,
    weatherIcon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
    weatherDescription: data.weather[0].description,
});

export default getCurrentDayForecast;
// var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
