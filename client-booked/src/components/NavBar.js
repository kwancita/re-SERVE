import { useNavigate, Link } from "react-router-dom";
import {HomeIcon, UserIcon, LogoutIcon} from "@heroicons/react/solid"

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
        <nav className="bg-blue-400 sticky top-0 font-semibold p-4 flow-root">
            <div className="float-left">
                <h1 className="text-xl text-white h-8 hover:text-black"><Link to="/">re-SERVE</Link></h1>
            </div>
            <div className="float-right flex space-x-4">
                <Link to="/"><HomeIcon className="text-white h-8 hover:text-black"/></Link>
                <Link to="/me"><UserIcon className="text-white h-8 hover:text-black"/></Link>
                <button onClick={handleLogout}><LogoutIcon className="text-white h-8 hover:text-black"/></button>
            </div>
        </nav>
    )
}

export default NavBar


