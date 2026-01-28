require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(express.json());

app.use("/api/users", require("./routes/api/userRoutes"));
app.use("/api/projects", require("./routes/api/projectRoutes"));
app.use("/api", require("./routes/api/taskRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
