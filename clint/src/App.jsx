
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './signup';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './Login';
import Home from './Home';


function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
