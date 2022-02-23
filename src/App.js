import './App.css';
import {Routes, Route} from "react-router-dom"
import SignIn from './components/authentification/signIn';
import SignUp from './components/authentification/signUp';
import Profil from './components/profil';
import Hotel from './components/hotel/HotelList';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='signin' element= {<SignIn/>}/>
        <Route path='signup' element= {<SignUp/>}/>
        <Route path='profil' element= {<Profil/>}/>
        <Route path='HotelList' element= {<Hotel/>}/>

      </Routes>

    </div>
  );
}

export default App;
