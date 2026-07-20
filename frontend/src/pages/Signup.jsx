import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

function Signup() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    const changeHandler = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const signupUser = async (e) => {
        e.preventDefault();

        try {

            const response = await API.post("/auth/signup", user);

            alert(response.data.message);

            navigate("/login");

        } catch (error) {

            alert(error.response?.data?.message || "Signup Failed");

        }
    };

    return (

        <div className="container">

            <h1>Signup</h1>

            <form onSubmit={signupUser}>

                <input
                    type="text"
                    placeholder="Enter Name"
                    name="name"
                    value={user.name}
                    onChange={changeHandler}
                    required
                />

                <input
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    value={user.email}
                    onChange={changeHandler}
                    required
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    value={user.password}
                    onChange={changeHandler}
                    required
                />

                <button type="submit">
                    Signup
                </button>

            </form>

            <p>
                Already have an account?
                <Link to="/login"> Login</Link>
            </p>

        </div>

    );
}

export default Signup;