import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function SignupForm({setCurrentUser, restaurantId}) {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState([]);

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    function handleSubmit(e){
        e.preventDefault();

        const userData = {...formData}
        fetch("/signup",{
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(userData),
        })
        .then((r) => {
            if (r.ok) {
                r.json().then((user) => {
                    console.log(user);
                    console.log(setCurrentUser, "check sign up")
                    setCurrentUser(user);
                    const storeResID = localStorage.getItem("restauID")
                    const ID = storeResID || restaurantId
                    const url = ID ? `/restaurants/${ID}` : "/"
                    // console.log(url)
                    navigate(url)
                    setFormData({
                        username: "",
                        email: "",
                        password: "",
                    });
            })
        } else{
          r.json().then((err) => setErrors(err.errors));  
        }
      });
    }

    return (
        <div className="p-6 mx-10 bg-blue-300 rounded-md mt-12">
            <form onSubmit={handleSubmit}>
                <h2 className="text-lg font-semibold text-center pb-2">Sign Up here</h2>
                <div className="flex justify-center">
                    <input 
                        className="rounded-sm p-1 mr-2 mt-1"
                        id = "username-signup"
                        type = "text"
                        placeholder="Username"
                        name = "username"
                        value = {formData.username}
                        onChange = {handleChange}
                    />
                </div>
                <div className="flex justify-center">
                    <input 
                        className="rounded-sm p-1 mr-2 mt-1"
                        id = "email-signup"
                        type = "text"
                        placeholder="Email"
                        name = "email"
                        value = {formData.email}
                        onChange = {handleChange}
                    />
                </div>
                <div className="flex justify-center">
                    <input 
                        className="rounded-sm p-1 mr-2 mt-1"
                        id = "password-signup"
                        type = "password"
                        placeholder="Password"
                        name = "password"
                        value = {formData.password}
                        onChange = {handleChange}
                    />
                </div>
                <div className="flex justify-center mt-4">
                    <button className="bg-blue-500 px-2 py-0.5 rounded-sm text-white" type="submit">Submit</button>
                </div>
                {errors.map((err) => (
                        <li className="text-red-600 text-center" key={err}>{err}</li>
                ))}
                <p className="pt-2 italic text-center">Already have an account? <Link to="/login" replace >Login</Link></p>
            </form>
        </div>
    )
}

export default SignupForm