import { useNavigate, Link } from "react-router-dom";

function NavBar({setCurrentUser}) {

    const navigate = useNavigate();

    function handleLogout() {
        fetch("/logout", {
            method: 'DELETE'
        })
        navigate('/')
        console.log("Logged out")
        setCurrentUser(null)
    }
    
    return (
        <div>
            <h2><Link to="/">re-SERVE</Link></h2>
            <h2><Link to="/">home</Link></h2>
            <h2><Link to="/me">account</Link></h2>
            <button onClick={handleLogout}>logout</button>
        </div>
    )
}

export default NavBar
