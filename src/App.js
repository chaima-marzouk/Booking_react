import './App.css';
import {Routes, Route} from "react-router-dom"
import SignIn from './components/authentification/signIn';
import SignUp from './components/authentification/signUp';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='signin' element= {<SignIn/>}/>
        <Route path='signup' element= {<SignUp/>}/>
      </Routes>

    </div>
  );
}

export default App;
