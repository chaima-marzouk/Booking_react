import '../css/style.css'
import img from '../img/pexels-marlene-leppänen-4370440.jpg'
import React from 'react';
import {Link} from "react-router-dom"



function Signup_form(){
    return (
    <div className='container'>
        <div className='form_box'>
            <img className='image' src={img} alt="test" />
            <div className='form'>

            <h1 className='title'> Commencez à planifier votre prochaine escapade ! </h1>
            <h3>Signup :</h3>
            <form action="">
                <input type="text" placeholder='Entre name please' /><br />
                <input type="text" placeholder='Entre email please' /><br />
                <input type="text" placeholder='Entre password please'  /><br />
                <input type="text" placeholder='Comfirm password please' /><br />
                <div id="profile-container">
                <input type="file" hidden name='profil_pic'/><br />
                </div>
            </form>
            <div className='button_parent'>

            <button class="button button2" type='submit'>Submit</button>
            </div>
            <h5>Already have an account ?  
                <Link to="/signin">
                    <span> Signin now !</span>
                </Link>
            </h5>
            </div>
        </div>
    </div>
    )
}

export default Signup_form;