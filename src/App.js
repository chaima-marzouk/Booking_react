import './css/App.css';
import {Routes, Route} from "react-router-dom"
import Homepage from './components/homepage/homepage';
import SignIn from './components/authentification/signIn';
import SignUp from './components/authentification/signUp';
import Profil from './components/profil';
import React  from 'react';
import Dashboard from './components/Admin/dashboard'
// import Dashboard2 from './components/dashboard.user/tables/dashboard'
import SideBar from './components/Admin/sidebar';
import ModelH from './components/Admin/modal_Add_Hotel';
import ModelU from './components/Admin/modal_add_User';
import Hotels from './components/Admin/AllHotels'
// import Users from './components/dashboard.user/tables/dashboard'
import TableUser from "./components/dashboard.user/tables/dashboardComponents/tableUser";






function App() {

  return (
    <div className="App">

      <form >
         
      </form>
      <Routes>

        <Route path='signin' element= {<SignIn/>}/>
        <Route path='/' element= {<Homepage/>}/>

        <Route path='signup' element= {<SignUp/>}/>
        <Route path='/dashboard/*' element= {<Dashboard/>}/>

        <Route path='profil' element= {<Profil/>}/>

        <Route path='Dashbaord' element= {<Dashboard/>}>
              <Route path = "hotels" element=  {<Hotels/>}/>
              <Route path = "users" element=  {<TableUser/>}/>
        </Route>
        <Route path='Model' element= {<ModelH/>}/>
      
        
      </Routes>

    </div>
  );
}

export default App;
