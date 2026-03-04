require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./Routes/authRoutes");
const eventRoutes = require("./Routes/eventRoutes");
const registrationRoutes = require("./Routes/registrationRoutes");
const judgeRoutes = require("./Routes/judgeRoutes");
// const registrationRoutes = require("./routes/registrationRoutes");
const evaluationRoutes = require("./Routes/evaluationRoutes");

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