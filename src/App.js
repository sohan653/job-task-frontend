import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar';
import { Route, Routes } from 'react-router';

import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Routes>
      <Route path='/' element={<NavBar> </NavBar>}> </Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
    </Routes>
  );
}

export default App;
