const express = require("express");
const {
  createCategory,
  getAllCategory,
  getById,
  deleteCategory,
  updateCategory,
} = require("../controllers/CategoryController");
const router = express.Router();
const { protect, admin } = require("../middleware/AuthMiddleware");


router.post("/", createCategory);
router.get("/", getAllCategory);
router.get("/getById/:id", getById);

router.put("/update/:id", updateCategory);

router.delete("/:id", deleteCategory);
module.exports = router;
