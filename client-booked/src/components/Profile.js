function Profile({currentUser}) {
    
    return (
        <dev className="flex justify-center">
            <div className="bg-blue-200 mx-10 my-6 rounded-md p-6 w-80">
                <h1 className="bg-blue-500 text-white text-center p-1 rounded-sm mb-2">Your Profile</h1>
                <div className="bg-blue-500 text-white p-2 rounded-sm">
                    <p>Username: {currentUser.username}</p>
                    <p>Email: {currentUser.email}</p>
                </div>
            </div>
        </dev>
        
    )
}

export default Profile
