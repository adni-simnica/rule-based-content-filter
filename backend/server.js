const express = require("express");
const cors = require("cors");

const rulesRoutes = require("./routes/rules.routes");
const processRoutes = require("./routes/process.routes");

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/rules", rulesRoutes);
app.use("/process", processRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});