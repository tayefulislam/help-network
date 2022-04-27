import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Dashboard from './Pages/Dashboard/Dashboard';
import VolunteerList from './Pages/Dashboard/Admin/VolunteerList/VolunteerList';

function App() {
  return (
    <div className="App">

      <Routes>

        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </div>
  );
}

export default App;
