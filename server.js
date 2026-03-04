require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const eventRoutes = require("./routes/eventRoutes");
const registrationRoutes = require("./routes/registrationRoutes");
const judgeRoutes = require("./routes/judgeRoutes");
// const registrationRoutes = require("./routes/registrationRoutes");
const evaluationRoutes = require("./routes/evaluationRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

app.use("/api/auth",authRoutes);
app.use("/api/events",eventRoutes);
app.use("/api/register",registrationRoutes);
app.use("/api/judges",judgeRoutes);
// app.use("/api/register",registrationRoutes);
app.use("/api/evaluations",evaluationRoutes);

const PORT = 5000;

app.listen(PORT,()=>{
console.log(`Server running on port ${PORT}`)
});