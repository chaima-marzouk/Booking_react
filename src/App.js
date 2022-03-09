import './css/App.css';
import {Routes, Route} from "react-router-dom"
import SignIn from './components/authentification/signIn';
import SignUp from './components/authentification/signUp';
import Profil from './components/profil';
import React  from 'react';
import Dashboard from './components/Admin/dashboard'
import SideBar from './components/Admin/sidebar';
import ModelH from './components/Admin/modal_Add_Hotel';
import ModelU from './components/Admin/modal_add_User';
import Hotels from './components/Admin/AllHotels'
// import  Hotels  from '@mui/icons-material';






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
              <Route path = "users" element=  {<h1>Users</h1>}/>
        </Route>
        <Route path='Model' element= {<ModelH/>}/>
      
        
      </Routes>

    </div>
  );
}

export default App;
