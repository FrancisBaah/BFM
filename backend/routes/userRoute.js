const express = require("express");
const {
  registerUser,
  getUser,
  UpdateUser,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

router.route("/").post(registerUser).get(getUser);
router.route("/:id").put(UpdateUser).delete(deleteUser);

module.exports = router;
