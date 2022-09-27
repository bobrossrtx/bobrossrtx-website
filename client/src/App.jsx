import React, { Component } from 'react';
import {
  Route,
  Routes,
  BrowserRouter as Router
} from 'react-router-dom';

// Firebase
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui'

// Global styles
import './App.css';
import 'firebaseui/dist/firebaseui.css';

// Pages
import Layout from './Layouts/Layout';
import Home from './Pages/Home';
import Test from './Pages/Test';
import Redirection from './Pages/Redirection';
import Error from './Pages/Error';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import Logout from './Pages/Auth/Logout';
import Profile from './Pages/Auth/Profile';

// Providers
import { AuthProvider, useAuth } from "./contexts/AuthContext";


function App(props) {
  const { currentUser } = useAuth() | null;

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>

            {/* Pages */}
            <Route index element={<Home />} />
            <Route path="/about" element={<Test />} />
            <Route path="/posts" element={<Test />} />
            <Route path="/post/:id" element={<Test />} />
            <Route path='/contact' element={<Test />} />
            <Route path='/privacy' element={<Test />} />
            <Route path='/donate' element={<Test />} />
            <Route path='/store' element={<Test />} />
            <Route path='/store/ebooks' element={<Test />} />
            <Route path='/store/tools' element={<Test />} />

            {/* Auth */}
            
            <Route path="/login" element={!currentUser ? <Login /> : <Profile />} />
            <Route path="/register" element={!currentUser ? <Register /> : <Profile />} />
            <Route path="/logout" element={currentUser ? <Logout /> : <Redirection to="/error?errorcode=503" />} />

            {/* Error Pages */}
            <Route path='*' element={<Redirection to="/error?errorcode=404" />} />
            <Route path='/error' element={<Error />} />

            {/* Redirections */}
            <Route path='/fiverr' element={<Redirection to="https://www.fiverr.com/bobrossrtx" />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
