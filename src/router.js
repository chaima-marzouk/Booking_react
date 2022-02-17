import React from 'react';
import reactDom from 'react-dom';
import Signin_form from './components/signin_form';
import Signup_form from './components/signup_form';
import {Routes, Route} from 'react-router-dom';

function App() {
    return (
    <div className="App">
    <Routes>
        <Route path="/signup" element={<Signup_form />} />
        <Route path="/signin" element={<Signin_form />} />
    </Routes>
    </div>
    );
}

export default App;
