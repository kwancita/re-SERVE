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
import Formres from './components/Formres';

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

  const [restaurants, setRestaurants] = useState([])

    useEffect(()=>{
        fetch("/restaurants")
        .then((r)=>r.json())
        .then((setRestaurants))
    },[])

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
          <Route path="/" element={<ResPage restaurants={restaurants}/>} />
          <Route path="/me" element={<Account currentUser={currentUser} setCurrentUser={setCurrentUser} reservations={reservations} setReservations={setReservations}/>} />
          <Route path="/login" element={<LoginForm setCurrentUser={setCurrentUser} restaurants={restaurants}/>} />
          <Route path="/signup" element={<SignupForm setCurrentUser={setCurrentUser} restaurants={restaurants} />} />
          <Route path="/bookings/new" element={<Reserve handleAddRes={handleAddRes} />} />
          {/* <Route path="/bookings/new" element={<Formres handleAddRes={handleAddRes}/>} /> */}
          <Route path="/restaurants/:id" element={<ResDetails currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />  
        </Routes>
    </div>
  );
}

export default App;
