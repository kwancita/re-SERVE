import Formres from "./Formres"
import Unauth from "./Unauth"

function Reserve({setReserve,handleAddRes, currentUser, setCurrentUser, restaurantId,restaurant}) {
    console.log("reserve",  setCurrentUser)
    return (
        <div>
            {currentUser? (
                <Formres restaurant={restaurant} restaurantId={restaurantId} setReserve={setReserve} currentUser={currentUser} onAddRes={handleAddRes} />
            ):(
                <Unauth setCurrentUser={setCurrentUser} restaurantId={restaurantId} />
            )}
            
        </div>
    )
}

export default Reserve
