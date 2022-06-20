import { useState } from 'react';
import axios from 'axios';

const useForecast = () => {
    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [Forecast, setForecast] = useState(false);

    // call api
    const api = {
        base: 'https://api.openweathermap.org/data/2.5',
        key: 'f3e94b85032c1355001e5de166fc5b3e',
    };

    const getid = async location => {
        const { data } = await axios(`${api.base}/weather?q=${location}&units=metric&APPID=${api.key}`, {
            params: { query: location },
        });
        console.log(data.constructor);
        // console.log(data)

        if (data) {
            setError('no location');
            setLoading(false);

            return;
        }
        return data;
    };
    // ?gggggggggggg
    const gitforecastdata = async location => {
        const { data } = await axios(`${api.base}/weather?q=${location}&units=metric&APPID=${api.key}`, {
            params: { query: location },
        });
        if (!data) {
            setError('no location');
            setLoading(false);
            return;
        }
        console.log(data);
    };
    // !nnnnnnnnnnnn
    const submitRequset = async location => {
        setLoading(true);
        setError(false);

        const data = await getid(location);
        const res = await gitforecastdata(location);
    };
    //
    return {
        isError,
        isLoading,
        Forecast,
        submitRequset,
    };
};

export default useForecast;
