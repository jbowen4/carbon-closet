import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Profile(props) {
    const compId = props.match.params.id;

    const getComp = async () => {
        try {
            let response = await axios.get(`https://esg-metric-api.herokuapp.com/api/comp/${compId}`);
            let json = await response.data;
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getComp();
    });

    return (
        <Fragment>
            <p>Hello</p>
            <Link to="/">Back to Browse</Link>
        </Fragment>
    );
}

export default Profile;