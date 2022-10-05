import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams, UseSearchParams } from "react-router-dom";

const Affiliate = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState(searchParams.get('query'));

    return (
        <div className="container mx-auto mt-20 px-20">
            <Helmet>
                <title>Affiliate Store</title>
            </Helmet>
            <div className="place-items-center justify-center content-center grid h-46 gap-4">
                <h1 className="text-6xl">Affiliate Store</h1>
                
            </div>
        </div>
    );
}

export default Affiliate;