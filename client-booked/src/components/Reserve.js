import Formres from "./Formres"
import Unauth from "./Unauth"

function Reserve({setReserve,handleAddRes, currentUser, setCurrentUser, restaurantId}) {
    return (
        <div>
            {currentUser? (
                <Formres restaurantId={restaurantId} setReserve={setReserve} currentUser={currentUser} onAddRes={handleAddRes} />
            ):(
                <Unauth setCurrentUser={setCurrentUser}/>
            )}
            
        </div>
    )
}

export default Reserve
