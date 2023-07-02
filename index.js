const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use(cors()); // Enable CORS

//routes
const userRoutes = require("./routes/userRoutes");

//mount
app.use("/api/v1", userRoutes);

const connectWithDb = require("./config/database");
connectWithDb();

//start the server
app.listen(PORT, () => {
  console.log(`App is started at Port no ${PORT}`);
});

app.get("/", (req, res) => {
  res.send(`<h1>This is Homepage</h1>`);
});
