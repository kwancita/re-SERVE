// import logo from './logo.svg';
import './App.css';
import './index.css'
import { useEffect, useState } from 'react';

import { Routes, Route } from "react-router-dom";
import ResDetails from './components/ResDetails';
import NavBar from './components/NavBar';
import ResPage from './components/ResPage';
import Reserve from './components/Reserve';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import Account from './components/Account';

function App() {

  const [currentUser, setCurrentUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [reservations, setReservations] = useState([])
  console.log(currentUser);
  useEffect(() => {
    fetch("/me", {
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setAuthenticated(true);
        });
      } else {
        setAuthenticated(true);
      }
    });
  }, []);

  useEffect(()=>{
    fetch("/bookings")
    .then((r)=>r.json())
    .then((setReservations))
  },[])

  if (!authenticated){
    return <div></div>
  }
  
  function handleAddRes(newRes){
    setReservations([...reservations, newRes])
  }

  return (
    <div className="App">
      <NavBar setCurrentUser={setCurrentUser} />
        <Routes>
          <Route path="/" element={<ResPage />} />
          <Route path="/me" element={<Account currentUser={currentUser} reservations={reservations} setReservations={setReservations}/>} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/bookings/new" element={<Reserve handleAddRes={handleAddRes} />} />
          <Route path="/restaurants/:id" element={<ResDetails currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />  
        </Routes>
    </div>
  );
}

export default App;
