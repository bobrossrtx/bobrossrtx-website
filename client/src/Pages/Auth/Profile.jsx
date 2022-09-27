import React, { useState } from 'react';
import { useSearchParams, UseSearchParams } from "react-router-dom";

const Profile = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState(searchParams.get('query'));
   
    return (
        <div>
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