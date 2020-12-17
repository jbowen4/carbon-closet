import React, { useState } from 'react';

function Searchbar() {

    const [searchText, changeText] = useState("");

    return (
        <div className="searchbar">
            <input
                id="searchbox"
                type="search"
                value={searchText}
                onChange={(e) => changeText(e.target.value)}
                placeholder="Search"
            />
            <button id="searchbutton" onClick={() => console.log('hi')} type="button">
                <i class="fas fa-search-location"></i>
            </button>
        </div>
    );
}

export default Searchbar;