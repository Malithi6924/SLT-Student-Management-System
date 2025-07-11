const express = require("express");
const router = express.Router();
const {
  addStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent
} = require("../Controllers/userControllers");

// Add new student
router.post("/", addStudent);

// Get all students
router.get("/", getAllStudents);

// Get one student by ID
router.get("/:id", getStudentById);

// Update student by ID
router.put("/:id", updateStudent);

// Delete student by ID
router.delete("/:id", deleteStudent);

module.exports = router;
