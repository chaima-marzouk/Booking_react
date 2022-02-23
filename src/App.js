import './css/App.css';
import {Routes, Route} from "react-router-dom"
import SignIn from './components/authentification/signIn';
import SignUp from './components/authentification/signUp';
import Profil from './components/profil';
import Dashboard from './components/Admin/dashboard'
import SideBar from './components/Admin/sidebar';
import Model from './components/Admin/modal_add';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='signin' element= {<SignIn/>}/>
        <Route path='signup' element= {<SignUp/>}/>
        <Route path='profil' element= {<Profil/>}/>
        <Route path='Dashbaord/*' element= {<Dashboard/>}/>
        <Route path='Model' element= {<Model/>}/>
        
        
      </Routes>

    </div>
  );
}

export default App;
