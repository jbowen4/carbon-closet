import React, { useState, Fragment } from 'react';
import Item from '../Item';

const industries = [
    {
        id: 0,
        name: "All",
        checked: true
    },
    {
        id: 1,
        name: "Tech",
        checked: false
    },
    {
        id: 2,
        name: "Agriculture",
        checked: false
    },
    {
        id: 3,
        name: "Energy",
        checked: false
    },
    {
        id: 4,
        name: "Asset Management",
        checked: false
    },
    {
        id: 5,
        name: "Food",
        checked: false
    }
]

const links = industries.map(industry => {
    return (
        <li key={industry.id}>
            <Item name={industry.name}></Item>
        </li>
    )
})

function List() {
    return (
        <div className="industries container">
            <ul>
                {links}
            </ul>
        </div>
    );
}

export default List;