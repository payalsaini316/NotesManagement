import express from "express";

import {
  addNote,
  getNotes,
  getSingleNote,
  updateNote,
  deleteNote,
} from "../controllers/noteController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/add", authMiddleware, addNote);

router.get("/all", authMiddleware, getNotes);

router.get("/:id", authMiddleware, getSingleNote);

router.put("/update/:id", authMiddleware, updateNote);

router.delete("/delete/:id", authMiddleware, deleteNote);

export default router;