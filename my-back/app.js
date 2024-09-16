const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDB = require("./db/ConnectionDb");
const blogRouter = require("./routers/blogRouter");
const path = require("path");
const { ErrorMiddleware } = require("../utils/errorHandler");

app.use(express.json());
app.use(cors());
app.use(express.json({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


connectDB();

const PORT = process.env.PORT || 8080;


app.use("/api/v1/blogs", blogRouter);
app.use(ErrorMiddleware);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
