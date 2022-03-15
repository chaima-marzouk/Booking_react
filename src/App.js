import './css/App.css';
import {Routes, Route} from "react-router-dom"
import Homepage from './components/homepage/homepage';
import SignIn from './components/authentification/signIn';
import SignUp from './components/authentification/signUp';
import React  from 'react';
import ModelH from './components/Admin/hotels/modal_Add_Hotel';
import Dashboard  from './components/Admin/dasboard/dashboard';






function App() {

  return (
    <div className="App">

      <form >
         
      </form>
      <Routes>

        <Route path='signin' element= {<SignIn/>}/>
        <Route path='/' element= {<Homepage/>}/>

        <Route path='signup' element= {<SignUp/>}/>
        <Route path='Dashbaord' element= {<Dashboard/>}>
        </Route>
        <Route path='Model' element= {<ModelH/>}/>
      
        
      </Routes>

    </div>
  );
}

export default App;
