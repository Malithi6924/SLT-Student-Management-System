const User = require("../Model/userModel");

// Add new student
const addStudent = async (req, res) => {
  try {
    const { name, email, age, address } = req.body;

    const newUser = new User({ name, email, age, address });
    await newUser.save();

    res.status(201).json({ message: "Student added successfully", student: newUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all students
const getAllStudents = async (req, res) => {
  try {
    const students = await User.find();
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get one student by ID
const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await User.findById(id);

    if (!student) return res.status(404).json({ message: "Student not found" });

    res.status(200).json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update student by ID
const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, age, address } = req.body;

    const updatedStudent = await User.findByIdAndUpdate(
      id,
      { name, email, age, address },
      { new: true } // return the updated document
    );

    if (!updatedStudent) return res.status(404).json({ message: "Student not found" });

    res.status(200).json({ message: "Student updated successfully", student: updatedStudent });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete student by ID
const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedStudent = await User.findByIdAndDelete(id);

    if (!deletedStudent) return res.status(404).json({ message: "Student not found" });

    res.status(200).json({ message: "Student deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  addStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent
};
