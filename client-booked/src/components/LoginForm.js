import { useState } from "react";
import { Link } from "react-router-dom"

function LoginForm({setCurrentUser}) {

    const [formData, setFromData] = useState({
        username: "",
        password: "",
    });
    const [errors, setErrors] = useState([]);
    console.log(errors)
    
    function handleChange(e){
        setFromData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    function handleSubmit(e){
        e.preventDefault();

        const userData = {...formData};
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        })
        .then((r) => {
            if (r.ok) {
                r.json().then((user) => {
                    console.log(user);
                    setCurrentUser(user);
                    setFromData({
                        username: "",
                        password: "",
                    });
            });
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
    }

    return (
        <div className="p-6 mx-10 bg-blue-300 rounded-md">
            <form onSubmit={handleSubmit}>
                <h2 className="text-lg font-semibold">Log In here</h2>
                <input 
                    className="rounded-sm p-1 mr-2 mt-1"
                    id="usernname-login"
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                />
                <input 
                    className="rounded-sm p-1 mr-2 mt-1"
                    id="password-login"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <span className="text-red-600">{errors}</span>
                <button className="bg-blue-500 px-2 py-0.5 rounded-sm text-white" type="submit">Login</button>
                <p className="pt-2 italic">No account yet? <Link to="/signup">Sign Up</Link></p>
            </form>
        </div>
    )
}

export default LoginForm