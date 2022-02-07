import {useState} from 'react'

function EditForm(setEdit, reserve, onUpdate) {
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [guest, setGuest] = useState('')
    const [errors, setErrors] = useState([])

    function handleUpdate(){
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
                    onUpdate(newRes)
                    setDate("")
                    setTime("")
                    setGuest("")
                })
            }else{
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }
    console.log(reserve)

    return (
        <div>
            <form onSubmit={handleUpdate}>
                <input 
                    type="date"
                    name="date"
                    value={date}
                    placeholder="yyyy/mm/dd"
                    onChange={(e) => setDate(e.target.value)}
                />
                <input 
                    type="time"
                    name="time"
                    value={time}
                    placeholder="time ex: 5pm"
                    onChange={(e) => setTime(e.target.value)}
                />
                <input 
                    type="number"
                    name="guest"
                    value={guest}
                    placeholder="Guess"
                    onChange={(e) => setGuest(e.target.value)}
                />
                {errors.map((err) => (
                    <li key={err}>{err}</li>
                ))}
                <button onClick={()=>setEdit(false)} >Cancel</button>
                <button type="submit">Confirm</button>
            </form>
        </div>
    )
}

export default EditForm
