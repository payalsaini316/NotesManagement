import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import API from "../services/api";

function EditNote() {

    const { id } = useParams();

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

    useEffect(() => {

        getSingleNote();

    }, []);

    const getSingleNote = async () => {

        const response = await API.get("/notes/all", {

            headers: {

                Authorization: localStorage.getItem("token")

            }

        });

        const data = response.data.find((item) => item._id === id);

        setNote(data);

    };

    const updateNote = async (e) => {

        e.preventDefault();

        await API.put(`/notes/update/${id}`, note, {

            headers: {

                Authorization: localStorage.getItem("token")

            }

        });

        alert("Note Updated");

        navigate("/home");

    };

    return (

        <>

            <Navbar />

            <div className="container">

                <h1>Edit Note</h1>

                <form onSubmit={updateNote}>

                    <input

                        type="text"

                        name="title"

                        value={note.title}

                        onChange={changeHandler}

                    />

                    <textarea

                        name="description"

                        value={note.description}

                        onChange={changeHandler}

                    ></textarea>

                    <button>

                        Update Note

                    </button>

                </form>

            </div>

        </>

    );

}

export default EditNote;