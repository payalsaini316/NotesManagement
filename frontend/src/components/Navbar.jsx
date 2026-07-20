import { Link, useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("token");

        navigate("/login");
    }

    return (

        <nav className="navbar">

            <h2>Notes Management</h2>

            <div>

                <Link to="/home">Home</Link>

                <Link to="/addnote">Add Note</Link>

                <button onClick={logout}>Logout</button>

            </div>

        </nav>

    )

}

export default Navbar;