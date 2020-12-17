import React from 'react'
import { Link } from 'react-router-dom';

function Card(props) {

    const linkToComp = {
        pathname: `/comp/${props.id}`,
        idParam: props.id
    }
    return (
        <div className="card">
            <img src={props.logo ? `${props.logo}` : ""} alt="Logo" />
            <h3>{props.name}</h3>
            <h5>{props.industry}</h5>
            <Link to={linkToComp}>View Comp Profile</Link>
        </div>
    )
}

export default Card
