import './css/App.css';
import {Routes, Route} from "react-router-dom"
import SignIn from './components/authentification/signIn';
import SignUp from './components/authentification/signUp';
import Profil from './components/profil';

import Hotel from './components/hotel/HotelList';



import Dashboard from './components/Admin/dashboard'
import SideBar from './components/Admin/sidebar';
import ModelH from './components/Admin/modal_Add_Hotel';
import ModelU from './components/Admin/modal_add_User';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='signin' element= {<SignIn/>}/>
        <Route path='signup' element= {<SignUp/>}/>
        <Route path='profil' element= {<Profil/>}/>

        <Route path='HotelList' element= {<Hotel/>}/>


        <Route path='Dashbaord/*' element= {<Dashboard/>}/>
        <Route path='Model' element= {<ModelH/>}/>
        
        

      </Routes>

    </div>
  );
}

export default App;
