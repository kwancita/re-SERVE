import {useState, useEffect} from 'react'
import Restaurant from "./Restaurant"

function ResPage() {

    const [restaurants, setRestaurants] = useState([])

    useEffect(()=>{
        fetch("/restaurants")
        .then((r)=>r.json())
        .then((setRestaurants))
    },[])
    
    return (
        <div>
            <h1>Asian Cuisine NYC</h1>
            {restaurants.map((restaurant)=>(
                <Restaurant 
                    key={restaurant.id}
                    restaurant={restaurant}
                />
            ))}
        </div>
    )
}

export default ResPage
