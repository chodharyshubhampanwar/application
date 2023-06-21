const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, "client/build")));

// API route
app.get("/api", (req, res) => {
  res.json({ message: "Hello world" });
});

// Wildcard route to serve the index.html file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
