import React from 'react';
import reactDom from 'react-dom';
import Signup_form from './components/signup_form';
import Signin_form from './components/siginin_form';
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
