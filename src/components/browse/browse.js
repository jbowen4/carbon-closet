import React, { Fragment } from 'react';

import List from "./List";
import Card from "./Card";
import CardList from './CardList';
import Searchbar from './Searchbar';
import Navbar from '../layout/Navbar';

function Browse() {
    return (
        <Fragment>
            <Navbar />
            <div>
                <div className="billboard container">
                    <h1>This is the site</h1>
                    <Searchbar />
                </div>
                <div className="browsebox">
                    <List />
                    <CardList />
                </div>
            </div>
        </Fragment>
    );
}

export default Browse;