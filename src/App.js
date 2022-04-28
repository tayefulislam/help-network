import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Dashboard from './Pages/Dashboard/Dashboard';
import VolunteerList from './Pages/Dashboard/Admin/VolunteerList/VolunteerList';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Public/Home/Home';
import Register from './Pages/Public/Register/Register';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">

      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>

        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='register' element={<Register></Register>}></Route>

        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      </Routes>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
