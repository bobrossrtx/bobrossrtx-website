import React, { Component } from 'react';
import {
  Route,
  Routes,
  BrowserRouter as Router
} from 'react-router-dom';

// Global styles
import './App.css';

// Pages
import Layout from './Layouts/Layout';
import Home from './Pages/Home';
import Test from './Pages/Test';
import Redirection from './Pages/Redirection';
import Error from './Pages/Error';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>

            {/* Pages */}
            <Route index element={<Home />} />
            <Route path="/about" element={<Test />} />
            <Route path="/login" element={<Test />} />
            <Route path="/register" element={<Test />} />
            <Route path="/posts" element={<Test />} />
            <Route path="/post/:id" element={<Test />} />
            <Route path='/contact' element={<Test />} />
            <Route path='/privacy' element={<Test />} />
            <Route path='/donate' element={<Test />} />
            <Route path='/store' element={<Test />} />
            <Route path='/store/ebooks' element={<Test />} />
            <Route path='/store/tools' element={<Test />} />

            {/* Error Pages */}
            <Route path='*' element={<Redirection to='/error?errorcode=404' />} />
            <Route path='/error' element={<Error />} />

            {/* Redirections */}
            <Route path='/fiverr' element={<Redirection to="https://www.fiverr.com/bobrossrtx" />} />
          </Route>
        </Routes>
      </Router>
    );
  }
}

export default App;
