const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const filename = `${Date.now()}-${file.fieldname}${ext}`;
        cb(null, filename);
    },
});

const upload = multer({ storage: storage });
const {
    getAllBlogs,
    getBlogById,
    createBlog,
} = require("../controllers/BlogController");
const { ErrorMiddleware } = require("../utils/ErrorHandler");

router.get("/", getAllBlogs);
router.get("/:id", getBlogById);
router.post("/", upload.single("image"), createBlog);
router.use(ErrorMiddleware);
module.exports = router;