function Formres({setReserve, currentUser}) {
    return (
        <div>
            <form>
                <button onClick={()=>setReserve(false)} >x</button>
                <p>Hi, {currentUser.username}</p>
                <h3>Resavation for restaurant_name</h3>
                <input 
                    placeholder="yyyy/mm/dd"
                />
                <input 
                    placeholder="time ex: 5pm"
                />
                <input 
                    placeholder="Guess"
                />
                <button onClick={()=>setReserve(false)} >Cancel</button>
                <button>Confirm</button>
            </form>
        </div>
    )
}

export default Formres
