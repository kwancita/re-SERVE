// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
// import { BrowserRouter as Router } from "react-router-dom";
// import In from './components/In';
// import Out from './components/Out';

import { Routes, Route } from "react-router-dom";
import ResDetails from './components/ResDetails';
import NavBar from './components/NavBar';
import ResPage from './components/ResPage';
import Reserve from './components/Reserve';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';

function App() {

  const [currentUser, setCurrentUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
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

  if (!authenticated){
    return <div></div>
  }

  return (
    <div className="App">
      <NavBar setCurrentUser={setCurrentUser} />
        <Routes>
          <Route path="/" element={<ResPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/restaurants/new" element={<Reserve />} />
          <Route path="/restaurants/:id" element={<ResDetails currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
          
        </Routes>
      {/* <Router>
        {currentUser? (
          <In
            setCurrentUser={setCurrentUser} 
            currentUser={currentUser}
          />
        ):(
          <Out 
            setCurrentUser={setCurrentUser}
          />
        )}
      </Router> */}
    </div>
  );
}

export default App;
