function Profile({currentUser}) {
    
    return (
        <div>
            <p>{currentUser.username}</p>
            <p>{currentUser.email}</p>
        </div>
    )
}

export default Profile
