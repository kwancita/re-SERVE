import { useNavigate } from "react-router-dom";

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
            <h2>re-SERVE</h2>
            <h2>home</h2>
            <h2>account</h2>
            <button onClick={handleLogout}>logout</button>
        </div>
    )
}

export default NavBar
