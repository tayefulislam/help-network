import React, { useEffect, useState } from 'react';
import './Search.css'

const Search = () => {



    return (
        <div>

            <h1 className='search-title'>I grow by helping people in need.</h1>

            <form class="d-flex w-50 mx-auto mt-5">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>







        </div>
    );
};

export default Search;