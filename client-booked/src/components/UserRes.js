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
        <div className="flex justify-center">
            <div className="bg-blue-200 mx-10 my-6 rounded-md p-6 w-1/2">
                <h1 className="text-lg font-semibold pb-2">Your reservations</h1>
                {reservations.map((reserve)=>(
                    <Reservation 
                        key={reserve.id}
                        reserve={reserve}
                        onUpdate={handleupdate}
                        onDelete={handleDelete}
                    />
                ))}
            </div>
        </div>
    )
}

export default UserRes
