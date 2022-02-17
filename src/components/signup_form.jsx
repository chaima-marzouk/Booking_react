import '../css/style.css'
import img from '../img/pexels-marlene-leppänen-4370440.jpg'
import React from 'react';


function Signup_form(){
    return (
    <div className='container'>
        <div className='form_box'>
            <img className='image' src={img} alt="test" />
            <div className='form'>

            <h1 className='title'> title is here </h1>
            <h3>test test</h3>
            <input type="text" placeholder='Entre name please' /><br />
            <input type="text" placeholder='Entre email please' /><br />
            <input type="text" placeholder='Entre password please'  /><br />
            <input type="text" placeholder='Comfirm password please' /><br />
            <div className='button_parent'>

            <button class="button button2" type='submit'>Submit</button>
            </div>
            <h5>Already have an account ? <span>Signin now !</span></h5>
            </div>
        </div>
    </div>
    )
}

export default Signup_form;