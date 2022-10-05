import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams, UseSearchParams } from "react-router-dom";

const Test = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState(searchParams.get('query'));

    return (
        <div>
            <Helmet>
                <title>Test Page</title>
            </Helmet>
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

export default Test;