import {useState} from 'react'

function Formres({setReserve, currentUser, onAddRes, restaurantId, restaurant}) {
    const [resId, setResId] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [guest, setGuest] = useState('')
    const [errors, setErrors] = useState([])

    // console.log(setDate)

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
                {/* <select className="rounded-sm p-1 mr-2 mt-1">
                    <option value="time">Time</option>
                    <option value="12">12 PM</option>
                    <option value="1">1 PM</option>
                    <option value="2">2 PM</option>
                    <option value="3">3 PM</option>
                    <option value="4">4 PM</option>
                    <option value="5">5 PM</option>
                    <option value="6">6 PM</option>
                    <option value="7">7 PM</option>
                    <option value="8">8 PM</option>
                    <option value="9">9 PM</option>
                    <option value="10">10 PM</option>
                </select> */}
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
