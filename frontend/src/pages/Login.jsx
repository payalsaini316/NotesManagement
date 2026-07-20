import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const changeHandler = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const loginUser = async (e) => {

        e.preventDefault();

        try {

            const response = await API.post("/auth/login", user);

            localStorage.setItem("token", response.data.token);

            alert("Login Successful");

            navigate("/home");

        } catch (error) {

            alert(error.response?.data?.message || "Login Failed");

        }

    }

    return (

        <div className="container">

            <h1>Login</h1>

            <form onSubmit={loginUser}>

                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={user.email}
                    onChange={changeHandler}
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={user.password}
                    onChange={changeHandler}
                    required
                />

                <button type="submit">
                    Login
                </button>

            </form>

            <p>
                Don't have an account?
                <Link to="/"> Signup</Link>
            </p>

        </div>

    )

}

export default Login;