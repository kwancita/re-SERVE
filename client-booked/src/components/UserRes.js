import Reservation from "./Reservation"

function UserRes({reservations, setReservations}) {

    function handleupdate(updateRes){
        const updateReservations = reservations.map((reservation) => {
            if (reservation.id === updateRes.id){
                return updateRes
            }else{
                return reservation
            }
        });
        setReservations(updateReservations)
    }

    function handleDelete(id){
        const updateReservations = reservations.filter((reservation) => reservation.id !== id);
        setReservations(updateReservations)
    }
    
    return (
        <div>
            <h1>Your reservations</h1>
            {reservations.map((reserve)=>(
                <Reservation 
                    key={reserve.id}
                    reserve={reserve}
                    onUpdate={handleupdate}
                    onDelete={handleDelete}
                />
            ))}
        </div>
    )
}

export default UserRes
