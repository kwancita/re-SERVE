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
        <div className="bg-blue-100 mx-10 my-6 rounded-md p-6">
            <img className="w-108 h-96 mb-4" src={image} alt={name} />
            <h3 className="text-2xl font-semibold">{name}</h3>
            <p className="mb-4">{cuisine}</p>
            <p className="text-md font-semibold">{address}</p>
            <a href={menu} target="_blank">Menu</a>
            <div className="my-4 space-x-4">
                <Link to={path}><button className="bg-blue-500 px-2 py-0.5 rounded-sm text-white">Go Back</button></Link>
                <button className="bg-blue-500 px-2 py-0.5 rounded-sm text-white" onClick={()=>{setReserve(true)}}>Resavation</button>
            </div>
            {reserve && <Reserve restaurant={restaurant} restaurantId={restaurant.id} setReserve={setReserve} currentUser={currentUser} setCurrentUser={setCurrentUser={setCurrentUser}} />}
        </div>
    )
}

export default ResDetails
