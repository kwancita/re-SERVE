import Restaurant from "./Restaurant"

function ResPage({restaurants}) {

    return (
        <div className="bg-blue-100">
            <h1 className="text-2xl font-bold py-10 text-center">Asian Cuisine NYC</h1>
            <div className="flex justify-center">
                <div className="grid grid-cols-2 gap-4 p-8 m-10">
                    {restaurants.map((restaurant)=>(
                        <Restaurant 
                            key={restaurant.id}
                            restaurant={restaurant}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ResPage
