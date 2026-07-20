import Note from "../models/Note.js";

// Add Note
export const addNote = async (req, res) => {
  try {
    const { title, description } = req.body;

    const note = await Note.create({
      title,
      description,
      user: req.user.id,
    });

    res.status(201).json({
      message: "Note Added Successfully",
      note,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Notes
export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id }).sort({
      createdAt: -1,
    });

    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Single Note
export const getSingleNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({
        message: "Note Not Found",
      });
    }

    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Note
export const updateNote = async (req, res) => {
  try {
    const { title, description } = req.body;

    const note = await Note.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
      },
      {
        new: true,
      }
    );

    res.status(200).json({
      message: "Note Updated Successfully",
      note,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Note
export const deleteNote = async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Note Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};