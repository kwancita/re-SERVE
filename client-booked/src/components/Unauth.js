import { useEffect } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function Unauth({setCurrentUser, restaurantId}) {
    // useEffect(() => {
    //     <Navigate to="/me" />
    // }, [])
 console.log("signup", setCurrentUser)
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<LoginForm setCurrentUser={setCurrentUser} restaurantId={restaurantId} />} />
                <Route exact path="/signup" element={<SignupForm setCurrentUser={setCurrentUser} restaurantId={restaurantId}/>} />
            </Routes>
        </div>
    )
}

export default Unauth
