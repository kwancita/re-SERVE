import { useState } from "react"
import EditForm from "./EditForm"

function Reservation({reserve, onUpdate, onDelete}) {
    const {restaurant, day_booked, time_booked, guest} = reserve
    const [edit, setEdit] = useState(false)

    function handleDelete() {
        fetch(`/bookings/${reserve.id}`, {
          method: "DELETE",
        })
        onDelete(reserve.id)
    }

    return (
        <div>
            <span>{restaurant.name}  ||  </span>
            <span>{day_booked}  ||  </span>
            <span>{time_booked}  ||  </span>
            <span>{guest}</span>
            <button onClick={()=>{setEdit(true)}}>Edit</button>
            {edit && <EditForm setEdit={setEdit} reserve={reserve} onUpdate={onUpdate} onDelete={onDelete} />}
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Reservation
