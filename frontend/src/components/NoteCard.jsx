import { Link } from "react-router-dom";
import API from "../services/api";

function NoteCard({ note }) {

    const deleteNote = async () => {

        try {

            await API.delete(`/notes/delete/${note._id}`, {

                headers: {

                    Authorization: localStorage.getItem("token")

                }

            });

            alert("Note Deleted");

            window.location.reload();

        }

        catch (error) {

            alert(error.response?.data?.message);

        }

    };

    return (

        <div className="card">

            <h2>{note.title}</h2>

            <p>{note.description}</p>

            <Link to={`/edit/${note._id}`}>

                <button className="edit">

                    Edit

                </button>

            </Link>

            <button
                className="delete"
                onClick={deleteNote}
            >

                Delete

            </button>

        </div>

    );

}

export default NoteCard;