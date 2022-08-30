import React, { Component } from 'react';
import OwenBorehamImage from '../assets/owenboreham.jpg';

class Home extends Component {
    state = {
        data: null
    };

    componentDidMount() {
    this.callBackendAPI()
        .then(res => this.setState({ data: res.express }))
        .catch(err => console.log(err));
    }

    // Fetching the GET route from the Express server
    callBackendAPI = async () => {
        const response = await fetch('/express_backend');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    }

    render() {
        return (
            <div className="container mx-auto mt-20 px-20">
                <div className="place-items-center justify-center content-center grid h-56 gap-4">
                    <h1 className="text-6xl">Bobrossrtx</h1>
                    <h3 className="text-3xl">Who Am I?</h3>
                    <p className="text-sm text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <img
                        src={OwenBorehamImage}
                        className="w-26 h-26 inline-block rounded-full ring-2 ring-gray"
                        alt="OwenBorehamPhoto" />
                </div>
            </div>
        );
    }
}

export default Home;
