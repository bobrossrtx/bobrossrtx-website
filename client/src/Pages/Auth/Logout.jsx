import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { Link, useSearchParams, UseSearchParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Logout = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState(searchParams.get('query'));

    const { logout, currentUser } = useAuth();
    const [error, setError] = useState("");

    useEffect(() => {
        try {
            setError("");
            logout();
        }
        catch {
            setError("Something went wrong");
        }
    }, []);
   
    return (
        <div className="container mx-auto pt-20 mt-20 px-20">
            {!currentUser ? (
                <div className="place-items-center justify-center content-center grid h-56 gap-4">
                    <h1 className="text-6xl">Logged Out</h1>
                    <p className="text-3xl">See ya next time</p>
                    <button className="w-32 px-2 py-1 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"><Link to="/">Return Home</Link></button>
                </div>
            ) : (
                <div className="place-items-center justify-center content-center grid h-56 gap-4">
                    <h1 className="text-6xl">Failed to logout</h1>
                    <p className="text-6xl">{error}</p>
                    <button><Link to="/">Return Home</Link></button>
                </div>
            )}
        </div>
    );
}

export default Logout;