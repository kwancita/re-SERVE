import {useState} from 'react'

function Formres({setReserve, currentUser, onAddRes, restaurantId}) {
    // const [resId, setResId] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [guest, setGuest] = useState('')
    const [errors, setErrors] = useState([])

    function handleSubmit(e){
        e.preventDefault();
        fetch('/bookings',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                restaurant_id:restaurantId,
                date_booked:date,
                time_booked:time,
                guest:guest
            })
        })
        .then((r) => {
            if (r.ok){
                r.json().then((newRes) => {
                    onAddRes(newRes)
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
        <div>
            <form onSubmit={handleSubmit}>
                <button onClick={()=>setReserve(false)} >x</button>
                <p>Hi, {currentUser.username}</p>
                <h3>Resavation for restaurant_name</h3>
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
                <button onClick={()=>setReserve(false)} >Cancel</button>
                <button type="submit">Confirm</button>
            </form>
        </div>
    )
}

export default Formres
