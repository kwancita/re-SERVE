import Profile from "./Profile"
import UserRes from "./UserRes"
import Unauth from "./Unauth"
import {Redirect, useNavigate, Link} from "react-router-dom"

function Account({currentUser, reservations, setReservations, setCurrentUser}) {
    const navigate = useNavigate()
    function redirect() {
        navigate("/login")
        return <></>
    }
    return (
        <div>
            {currentUser?(
                <div>
                    <Profile currentUser={currentUser} />
                    <UserRes reservations={reservations} setReservations={setReservations} />
                </div>  
            ):(
                // <Redirect to="/login" />
                // <Unauth setCurrentUser={setCurrentUser}/>
                // redirect()
                <div>
                    <button><Link to="/login">Login</Link></button>
                    <button><Link to="/signup">Sign up</Link></button>
                </div>
            )}      
        </div>
    )
}

export default Account
