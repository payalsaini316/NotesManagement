import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import API from "../services/api";

function AddNote() {

    const navigate = useNavigate();

    const [note, setNote] = useState({
        title: "",
        description: ""
    });

    const changeHandler = (e) => {
        setNote({
            ...note,
            [e.target.name]: e.target.value
        });
    };

    const addNote = async (e) => {

        e.preventDefault();

        try {

            await API.post("/notes/add", note, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            });

            alert("Note Added Successfully");

            navigate("/home");

        } catch (error) {

            alert(error.response?.data?.message || "Something Went Wrong");

        }

    };

    return (

        <>
            <Navbar />

            <div className="container">

                <h1>Add Note</h1>

                <form onSubmit={addNote}>

                    <input
                        type="text"
                        name="title"
                        placeholder="Enter Title"
                        value={note.title}
                        onChange={changeHandler}
                        required
                    />

                    <textarea
                        name="description"
                        placeholder="Enter Description"
                        value={note.description}
                        onChange={changeHandler}
                        required
                    ></textarea>

                    <button type="submit">
                        Add Note
                    </button>

                </form>

            </div>

        </>

    );
}

export default AddNote;