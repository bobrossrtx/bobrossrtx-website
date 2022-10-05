import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams, UseSearchParams } from "react-router-dom";
import functions from 'firebase-functions';

const Profile = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState(searchParams.get('query'));

    function handleSubmit(e)
    {

    }

    return (
        <div>
            <Helmet>
                <title>Profile</title>
            </Helmet>
            <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                    Make Admin
                </button>
            </form>
            <h1>Test Page</h1>
            <p>
                <label>
                    Query: {searchParams.get('query')}
                </label>
                <br />
                <label>
                    ID: {searchParams.get('id')}
                </label>
            </p>
        </div>
    );
}

export default Profile;