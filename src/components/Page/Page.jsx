import React from 'react';

import Form from '../Form';
import Error from '../Error';
import Loader from '../Loader';
import Forecast from '../Forecast';

import useForecast from '../../hooks/useForecast';

import Header from '../Header';
import style from './Page.module.css';

const Page = () => {
    const { isError, isLoading, forecast, submitRequset } = useForecast();

    const onSubmit = value => {
        submitRequset(value);
    };

    return (
        <>
            <Header />
            {!forecast && (
                <div className={`${style.box} position-relative`}>
                    {/* Form */}
                    {!isLoading && <Form submitSearch={onSubmit} />}
                    {/* Error */}
                    {isError && <Error message={isError} />}
                    {/* Loader */}
                    {isLoading && <Loader />}
                </div>
            )}
            {/* Forecast */}
            {forecast && <Forecast forecast={forecast} />}
        </>
    );
};

export default Page;
