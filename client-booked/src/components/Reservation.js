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
        <div className="flex my-2 justify-center">
            <div className="rounded-sm w-36 bg-blue-400 text-left pl-2 pt-3 mr-2">
                <span>{restaurant.name}</span>
            </div>
            <div className="rounded-sm w-48 bg-blue-400 text-left pl-2 mr-2">
                <span>{day_booked}</span>
            </div>
            <div className="rounded-sm w-48 bg-blue-400 text-left pl-2 mr-2">
                <span>{time_booked}</span>
            </div>
            <div className="rounded-sm w-12 text-center bg-blue-400 text-left pt-3 mr-2">
                <span>{guest}</span>
            </div>
            <div className="rounded-sm text-white w-20 text-center bg-red-600 pt-3 mr-2">
                <button onClick={handleDelete}>Delete</button>
            </div>
            <div className="rounded-sm w-56 text-center bg-green-200 pt-3">
                <button onClick={()=>{setEdit(true)}}>Edit</button>
                {edit && <EditForm setEdit={setEdit} reserve={reserve} onUpdate={onUpdate} onDelete={onDelete} />}
            </div>
        </div>
    )
}

export default Reservation
