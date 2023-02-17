
import './App.css';
import { useState} from "react"
import UserForm from './components/UserForm';
import UserDetails from './components/UserDetails';

function App() {
  const [show, setShow] = useState(true)
  return (
    <div className="App">
      <button onClick={()=>setShow(!show)}>{show? "Show User Details":"Add User"}</button>
      {show? <UserForm/>:<UserDetails/>}
    </div>
  );
}

export default App;
