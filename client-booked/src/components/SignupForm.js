import { useState } from "react"
import { Link } from "react-router-dom"

function SignupForm({setCurrentUser}) {

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
                    setCurrentUser(user);
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
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Sign Up here</h2>
                <input 
                    id = "username-signup"
                    type = "text"
                    placeholder="Username"
                    name = "username"
                    value = {formData.username}
                    onChange = {handleChange}
                />
                <input 
                    id = "email-signup"
                    type = "text"
                    placeholder="Email"
                    name = "email"
                    value = {formData.email}
                    onChange = {handleChange}
                />
                <input 
                    id = "password-signup"
                    type = "password"
                    placeholder="Password"
                    name = "password"
                    value = {formData.password}
                    onChange = {handleChange}
                />
                {errors.map((err) => (
                    <li key={err}>{err}</li>
                ))}
                <button type="submit">Submit</button>
                <p>Already have an account? <Link to="/login" replace >Login</Link></p>
            </form>
        </div>
    )
}

export default SignupForm