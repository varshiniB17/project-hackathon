const express = require("express");
const { getUsers, deleteUser } = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", protect, getUsers);
router.delete("/:id", protect, deleteUser);

module.exports = router;
