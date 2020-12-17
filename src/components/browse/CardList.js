import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Card from './Card';

const axiosInstance = axios.create({
    baseURL: 'https://esg-metric-api.herokuapp.com/api/',
    //headers: { 'Access-Control-Allow-Origin': '*' }
});

function CardList() {

    const [comps, setComps] = useState([]);

    const getComps = async () => {
        try {
            let response = await axiosInstance.get();
            let json = await response.data;
            setComps(json);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getComps();
    });

    return (
        <div className="card-list container">
            {comps.map(comp => (<Card key={comp.id}
                id={comp.id} name={comp.name}
                industry={comp.industry}
                logo={comp.photo} />))}
        </div>
    )
}

export default CardList;