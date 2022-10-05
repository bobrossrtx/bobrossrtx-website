import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate, useSearchParams, UseSearchParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Login = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState(searchParams.get('query'));

    const emailRef = useRef();
    const passwordRef = useRef();
    const { login, currentUser } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            navigate("/");
        } catch {
            setError("Invalid email or password");
        }
        setLoading(false);
    }
   
    return (
        <div className="container mx-auto pt-20 mt-20 px-20">
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="place-items-center justify-center content-center grid h-56 gap-4">
                <h1 className="text-6xl">Login</h1>
                {error}
                <form className="reative mt-6 w-96 p-4 rounded-md border-black border-0" onSubmit={handleSubmit}>
                    <label htmlFor='email' className='block text-md font-medium text-gray-700 pb-0'>
                        Email address
                    </label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        ref={emailRef}
                        className="h-8 block w-full rounded-md outline-none border-black-500 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="example@email.com"
                    />
                    <hr class="my-0 mx-auto w-50 h-1 bg-gray-100 rounded border-0 dark:bg-gray-300"></hr>
                    <label htmlFor='password' className='block text-md font-medium text-gray-700 pt-5 pb-0'>
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        ref={passwordRef}
                        className="h-8 block w-full rounded-md outline-none border-black-500 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="••••••••••••"
                    />
                    <hr class="my-0 mx-auto w-50 h-1 bg-gray-100 rounded border-0 dark:bg-gray-300"></hr>
                    <div className='flex justify-center'>
                        <label htmlFor='show-password' className='block text-md font-medium text-gray-700 pt-5 mr-1'>
                            Show Password
                        </label>
                        <input type="checkbox" id="show-password" name="show-password" className="mt-6 ml-1 mr-10 w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-0"
                            onClick={
                                () => {
                                    var x = document.getElementById("password");
                                    if (x.type === "password") {
                                        x.type = "text";
                                    } else {
                                        x.type = "password";
                                    }
                                }
                            }/>

                        <label htmlFor='remember' className='block text-md font-medium text-gray-700 pt-5 mr-1 ml-10'>
                            Remember Me
                        </label>
                        <input type="checkbox" id="remember" name="remember" className="mt-6 ml-1 w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-0" 
                            onClick={
                                () => {
                                }
                            }/>
                    </div>
                    <button disabled={loading} type="submit" className="mt-6 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Login
                    </button>
                    {/* Button that calls back to the server that creates a new user using the firestore module */}
                </form>
                <h1>
                    Don't have an account? <Link to="/register" class="hover:underline">Register</Link>
                </h1>
                <h1>
                    Forgot Password? <Link to="/forgot-password" class="hover:underline">Reset Password</Link>
                </h1>

            </div>
        </div>
    );
}

export default Login;