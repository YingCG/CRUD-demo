const express = require("express");
const app = express();

app.get("/users", (req, res) => {
  res.json({
    users: [
      { name: "jellyhand" },
      { name: "avacado belly" },
      { name: "gold brain" },
    ],
  });
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
