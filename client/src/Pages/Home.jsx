import React, { Component } from 'react';

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
            <div className="App">
                <h1 className='text-3xl font-bold underline'>Home</h1>
                <p className="App-intro">{this.state.data}</p>
            </div>
        );
    }
}

export default Home;