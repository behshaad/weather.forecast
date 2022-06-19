import React, { useState } from 'react';
// import { propTypes } from 'prop-types';

import styles from './Form.module.css';

const Form = ({ submitserach }) => {
    const [location, setlocation] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        if (!location || location === '') return;
        submitserach(location);
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                aria-label="location"
                type="text"
                className={`${styles.input} form-control`}
                placeholder="Search for location"
                required
                value={location}
                onChange={e => setlocation(e.target.value)}
            />

            <button type="submit" className={styles.button} onClick={onSubmit}>
                SEARCH
            </button>
        </form>
    );
};
// Form.prototype={
//     submitserach:propTypes.func.isRequired, 
// }
export default Form;
