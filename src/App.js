import './css/App.css';
import {Routes, Route} from "react-router-dom"
import SignIn from './components/authentification/signIn';
import SignUp from './components/authentification/signUp';
import Profil from './components/profil';
import React  from 'react';
import Dashboard  from './components/Admin/dashboard';
import ModelH from './components/Admin/modal_Add_Hotel';
import Hotels from './components/Admin/AllHotels'






function App() {

  return (
    <div className="App">

      <form >
         
      </form>
      <Routes>
        <Route path='signin' element= {<SignIn/>}/>
        <Route path='signup' element= {<SignUp/>}/>
        <Route path='profil' element= {<Profil/>}/>
        <Route path='Dashbaord' element= {<Dashboard/>}>
              <Route path = "hotels" element=  {<Hotels/>}/>
        </Route>
        <Route path='Model' element= {<ModelH/>}/>
      
        
      </Routes>

    </div>
  );
}

export default App;
