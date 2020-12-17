import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Profile(props) {
    const compId = props.match.params.id;

    const [company, setCompany] = useState(null);

    useEffect(async () => {
        let response = await axios.get(`https://esg-metric-api.herokuapp.com/api/comp/${compId}`);
        let json = await response.data;
        setCompany(json);
    }, []);

    return (
        <Fragment>
            <Link to="/">Back to Browse</Link>
            {company &&
                <div>
                    <h1>{company.name}</h1>
                    <h3>{company.industry}</h3>
                </div>
            }
        </Fragment>
    );
}

export default Profile;