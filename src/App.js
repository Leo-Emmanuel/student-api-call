import './App.css';

import Navbar from './component/Navbar'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Addstudent from './component/Addstudent';
import Search from './component/Search';
import Delete from './component/Delete';
import ViewAllStudents from './component/ViewAllstudents';
import Login from './component/Login';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ViewAllStudents/>} />
        <Route path="/add" element={<Addstudent />} />
        <Route path="/search" element={<Search />} />
        <Route path="/delete" element={<Delete />} />
        <Route path="/login" element={<Login />} />
        


        
        <Route/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
