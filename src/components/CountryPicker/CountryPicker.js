import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';
import styles from './CountryPicker.module.css';

export const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries,setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async() => {
            setFetchedCountries(await fetchCountries())
        }
        fetchAPI()
    },[setFetchedCountries])


    return (
        <div className={styles.container}>
            <FormControl>
                <NativeSelect onChange={e => handleCountryChange(e.target.value)}>
                    <option value="">全球数据</option>
                    {fetchedCountries.map(
                        (country,index) => <option key={index} value={country}>{country}</option>
                    )}
                </NativeSelect>
            </FormControl>
        </div>
    )
}
