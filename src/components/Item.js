import React, { useState, Fragment } from 'react';

function Item(props) {

    const [isChecked, check] = useState(props.checked);

    return (
        <Fragment>
            <input
                type="checkbox"
                checked={isChecked}
            />
            <p>{props.name}</p>
        </Fragment>
    );
}

export default Item;