import {useState} from 'react'

function EditForm({setEdit, reserve, onUpdate}) {
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [guest, setGuest] = useState(reserve.guest)
    const [errors, setErrors] = useState([])

    function handleUpdateRes(updatedRes) {
        onUpdate(updatedRes)
    }

    console.log(reserve)

    function handleFormUpdate(e) {
        e.preventDefault();
        fetch(`/bookings/${reserve.id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                date_booked:date,
                time_booked:time,
                guest:guest
            })
        })
        .then((r) => {
            if (r.ok){
                r.json().then((newRes) => {
                    handleUpdateRes(newRes)
                    setDate("")
                    setTime("")
                    setGuest("")
                })
            }else{
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    return (
        <div className="items-left">
            <form onSubmit={handleFormUpdate}>
                <input 
                    className="w-48 rounded-sm p-0.5 mt-1"
                    type="date"
                    name="date"
                    value={date}
                    placeholder="yyyy/mm/dd"
                    onChange={(e) => setDate(e.target.value)}
                />
                <input 
                    className="w-48 rounded-sm p-0.5 mt-1"
                    type="time"
                    name="time"
                    value={time}
                    placeholder="time ex: 5pm"
                    onChange={(e) => setTime(e.target.value)}
                />
                <input 
                    className="w-48 rounded-sm p-0.5 mt-1"
                    type="number"
                    name="guest"
                    value={guest}
                    placeholder="Guess"
                    onChange={(e) => setGuest(e.target.value)}
                />
                {errors.map((err) => (
                    <li className="text-red-600" key={err}>{err}</li>
                ))}
                <div className="my-4 space-x-4">
                    <button className="bg-blue-500 px-2 text-sm py-0.5 rounded-sm text-white" onClick={()=>setEdit(false)} >Cancel</button>
                    <button className="bg-blue-500 px-2 text-sm py-0.5 rounded-sm text-white" type="submit">Confirm</button>
                </div>  
            </form>
        </div>
    )
}

export default EditForm
