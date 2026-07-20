import axios from "axios";

const API = axios.create({
    baseURL: "https://notesmanagement-sp3a.onrender.com"
});

export default API;