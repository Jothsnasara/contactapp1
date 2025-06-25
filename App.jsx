import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Add from './components/Add'
import Login from './components/Login'
import Signup from './components/Signup'
import Aboutus from './components/Aboutus'
import View from './components/view'
import NavBar from './components/Navbar'
import BirthdayReminder from './components/BirthdayReminder'
import Message from './components/Message'


  function App() {
  const [birthdayData, setBirthdayData] = useState([]);

  const addBirthday = (newBirthday) => {
    setBirthdayData((prevData) => [...prevData, newBirthday]);
  };

  return (
    <>
       <NavBar/>
       <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Signup' element={<Signup/>}/>
          <Route path='/Add' element={<Add addBirthday={addBirthday} />} />

          <Route path='/View' element={<View/>}/>
          <Route path='/Ab' element={<Aboutus/>}/>
          <Route path="/Birthdays" element={<BirthdayReminder birthdayData={birthdayData} />} />
          <Route path="/Message" element={<Message />} />

        

       </Routes>
    </>
  )
}

export default App