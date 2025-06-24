import logo from './logo.svg';
import './App.css';
import Regis from './components/Regis';
import Login from './components/Login'
import Dashboard from './components/Dashboard';
import ForgotPassword from './components/ForgotPass';
import ResetPassword from './components/Reset';
import { BrowserRouter, Routes, Route } from "react-router"
import UserProvider from './context/UserProvider';
function App() {
  return (
    <>
    <UserProvider>

   
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Regis />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/forgot' element={<ForgotPassword />} />
          <Route path='/reset/:token' element={<ResetPassword/>} />
        </Routes>

      </BrowserRouter>

 </UserProvider>
    </>
  );
}

export default App;
