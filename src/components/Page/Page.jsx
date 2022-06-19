import React, { Fragment } from 'react';

import Form from '../Form';
import Error from '../Error/Error';
import Loder from '../Loader/Loader';
import Forecast from '../Forecast/Forecast';

import useForecast from '../../hooks/useForecast';

import Header from '../Header';
import style from './Page.module.css';

const Page = () => {
    const { isError, isLoading, Forecast, submitRequset } = useForecast();

    const onSubmit = value => {
        submitRequset(value);
    };

    return (
        <>
            <Header />
            <div className={style.box}>
                {/* form */}
                {!isLoading && <Form submitserach={onSubmit} />}
                {/* error */}
                {isError && <Error message={isError} />}
                {/* loder  */}
                {isLoading && <Loder />}
            </div>

            {/* <Forecast/>  */}
            {Forecast && <Forecast />}
        </>
    );
};

export default Page;
