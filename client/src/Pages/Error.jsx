import React, { useState } from 'react';
import { Link, useSearchParams, UseSearchParams } from "react-router-dom";

import errorIcon from '../assets/ErrorIcon.png';

const ErrorCodes = {
    "404": "Page not found",
    "500": "Internal server error",
}

const Error = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [errorCode, setErrorCode] = useState(searchParams.get('errorcode'));
   
    return (
        <div class="grid justify-center place-items-center mt-20">
            <div className="text-9xl flex">
                <img
                    src={errorIcon}
                    className="w-16 h-16 mt-10 mr-6"
                    alt="Error Icon" />
                Error
                <img
                    src={errorIcon}
                    className="w-16 h-16 mt-10 ml-6"
                    alt="Error Icon" />
            </div>
            <div className="text-5xl mt-5">
                {errorCode} 
                {
                    ErrorCodes[errorCode] ? ` - ${ErrorCodes[errorCode]}` : ""}
            </div>
            <div className="text-2xl mt-2" >
                If you think this is a mistake, please contact me <Link to="/contact" className="underline hover:no-underline">here</Link>.
            </div>
        </div>
    );
}

export default Error;