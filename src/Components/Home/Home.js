import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Country from '../Country/Country';

const Home = () => {

    const [country,setCountry] = useState([]);

    useEffect(() =>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountry(data))
    },[])

    return (
        <div>
             <h1 style={{textAlign: 'center'}}>Country Names</h1>

           
            {
                country.map((country => <Country country={country}></Country>))
            }
           

        </div>
    );
};

export default Home;