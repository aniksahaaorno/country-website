import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const {name} = props.country;

    const styleBody ={
        border: '1px solid lightgray',
        textAlign: 'center'
    }


    return (
        <div style={styleBody}>
           
            <h4>Country Name:{name}</h4>
            <p>For more information:</p>
            <Link to={`/country/${name}`}>Click here</Link>
        </div>
    );
};

export default Country;