import {useState} from 'react'

function Formres({setReserve, currentUser, onAddRes, restaurantId, restaurant}) {
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
        <div className="p-6 mx-10 bg-blue-300 rounded-md">
            <form onSubmit={handleSubmit}>
                <p className="font-semibold text-lg">Hi, {currentUser.username}</p>
                <h3 className="mb-4">When would you like to make the resavation for {restaurant.name}?</h3>
                <input 
                    className="rounded-sm p-1 mr-2 mt-1"
                    type="date"
                    name="date"
                    value={date}
                    placeholder="yyyy/mm/dd"
                    onChange={(e) => setDate(e.target.value)}
                />
                <input 
                    className="rounded-sm p-1 mr-2 mt-1"
                    type="time"
                    name="time"
                    value={time}
                    placeholder="time ex: 5pm"
                    onChange={(e) => setTime(e.target.value)}
                />
                <input 
                    className="rounded-sm p-1 mr-2 mt-1"
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
                    <button className="bg-blue-500 px-2 py-0.5 rounded-sm text-white" onClick={()=>setReserve(false)} >Cancel</button>
                    <button className="bg-blue-500 px-2 py-0.5 rounded-sm text-white" type="submit">Confirm</button>
                </div>
            </form>
        </div>
    )
}

export default Formres
