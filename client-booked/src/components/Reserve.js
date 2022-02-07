import Formres from "./Formres"
import Unauth from "./Unauth"

function Reserve({setReserve, currentUser, setCurrentUser}) {
    return (
        <div>
            {currentUser? (
                <Formres setReserve={setReserve} currentUser={currentUser}/>
            ):(
                <Unauth setCurrentUser={setCurrentUser}/>
            )}
            
        </div>
    )
}

export default Reserve
