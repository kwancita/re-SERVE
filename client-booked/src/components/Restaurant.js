import { Link } from 'react-router-dom'

function Restaurant({restaurant}) {
    const {name, image} = restaurant;
    const path = `/restaurants/${restaurant.id}`
    // console.log(path)

    return (
        <div className="p-6 mx-10 bg-blue-300 rounded-md">
            <Link to={path}>
            <img 
                className="pb-4 w-96 h-96 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ... rounded-md"
                src={image} 
                alt={name} 
            />
            </Link>
            <Link to={path}><h3 className="font-semibold pl-4">{name}</h3></Link>
        </div>
    )
}

export default Restaurant
