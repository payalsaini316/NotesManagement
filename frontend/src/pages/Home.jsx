import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import NoteCard from "../components/NoteCard";
import API from "../services/api";

function Home() {

    const [notes, setNotes] = useState([]);

    const getNotes = async () => {

        try {

            const response = await API.get("/notes/all", {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            });

            setNotes(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    useEffect(() => {

        getNotes();

    }, []);

    return (

        <>
            <Navbar />

            <div className="notes">

                {
                    notes.length > 0 ?

                        notes.map((note) => (

                            <NoteCard
                                key={note._id}
                                note={note}
                            />

                        ))

                        :

                        <h2>No Notes Found</h2>

                }

            </div>

        </>

    );

}

export default Home;