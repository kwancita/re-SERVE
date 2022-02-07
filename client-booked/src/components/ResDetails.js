import { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom"
import Reserve from './Reserve';

function ResDetails({currentUser, setCurrentUser}) {
    const [restaurant, setRestaurant] = useState({})
    const [reserve, setReserve] = useState(false)
    const { id } = useParams();
    const path = '/'

    useEffect(()=>{
        fetch(`/restaurants/${id}`)
        .then((r)=>r.json())
        .then((restaurant)=>{
            setRestaurant(restaurant);
        })
    },[id])
    // console.log(restaurant)
    const { name, address, menu, image, cuisine } = restaurant

    return (
        <div>
            {/* <img src={image} alt={name} /> */}
            <h3>{name}</h3>
            <p>{cuisine}</p>
            <p>{address}</p>
            <p>{menu}</p>
            <Link to={path}><button>Go Back</button></Link>

            
            <button onClick={()=>{setReserve(true)}}>Resavation</button>
            {reserve && <Reserve setReserve={setReserve} currentUser={currentUser} setCurrentUser={setCurrentUser={setCurrentUser}} />}
        </div>
    )
}

export default ResDetails
