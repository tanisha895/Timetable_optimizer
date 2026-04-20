const express = require("express");
const app = express();

app.use(express.json());

const timetableRoutes = require("./routes/timetableRoutes");
app.use("/api", timetableRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});