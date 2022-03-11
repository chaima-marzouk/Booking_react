import './App.css';
import {Routes, Route} from "react-router-dom"
import Homepage from './components/homepage/homepage';
import SignIn from './components/authentification/signIn';
import SignUp from './components/authentification/signUp';
import Dashboard from './components/dashboard.user/tables/dashboard'
import Profil from './components/profil';
function App() {
  return (
    <div className="App">
      <Routes>

        <Route path='signin' element= {<SignIn/>}/>
        <Route path='/' element= {<Homepage/>}/>

        <Route path='signup' element= {<SignUp/>}/>
        <Route path='/dashboard/*' element= {<Dashboard/>}/>

        <Route path='profil' element= {<Profil/>}/>
        
      </Routes>

    </div>
  );
}

export default App;
