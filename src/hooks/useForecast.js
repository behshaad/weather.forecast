import { useState } from 'react';
import axios from 'axios';

// const base_url=''
const useForecast = () => {
    const [isError, setError] = useState(false);
    const [isLoading, seLoading] = useState(false);
    const [Forecast, setForecast] = useState(false);

    // call api
    const api = {
        base: 'https://api.openweathermap.org/data/2.5/',
        key: 'f3e94b85032c1355001e5de166fc5b3e',
    };
    const submitRequset = async location => {
        const {data} = await axios(`${api.base}weather?q=${location}&units=metric&APPID=${api.key}`);
        console.log({ data  });
    };

    return {
        isError,
        isLoading,
        Forecast,
        submitRequset,
    };
};

export default useForecast;
