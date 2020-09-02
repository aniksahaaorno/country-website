import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {


    const {countryName} = useParams()

    const [country,setCountry] = useState([]);
    useEffect(() =>{

        fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
        .then(response => response.json())
        .then(data => setCountry(data[0]))

    },[])
         
    return (
        <div>
            <h1>Country Name: {countryName}</h1>
            <p>Capital: {country.capital}</p>
             <p>Region: {country.region}</p>
              <p>Area: {country.area}</p>
        </div>
    );
};

export default CountryDetails;