import Profile from "./Profile"
import UserRes from "./UserRes"

function Account({currentUser, reservations, setReservations}) {
    return (
        <div>
            <Profile currentUser={currentUser} />
            <UserRes reservations={reservations} setReservations={setReservations} />
        </div>
    )
}

export default Account
