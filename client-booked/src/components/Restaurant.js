import { Link } from 'react-router-dom'

function Restaurant({restaurant}) {
    const {name, image} = restaurant;
    const path = `/restaurants/${restaurant.id}`
    // console.log(path)

    return (
        <div>
            {/* <img src={image} alt={name} /> */}
            <h3>{name}</h3>
            <Link to={path}><button>See more</button></Link>
        </div>
    )
}

export default Restaurant
