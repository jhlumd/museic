const express = require("express");
const mongoose = require("mongoose");
const app = express();
const db = require("./config/keys").mongoURI;
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

const users = require("./routes/api/users");
const snippets = require("./routes/api/snippets");
const comments = require("./routes/api/comments");
const likes = require("./routes/api/likes");
const uploadImg = require("./routes/api/image_upload");
const fans = require('./routes/api/fans');

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

app.get("/", (req, res) => res.send("Testing!!"));

app.use(passport.initialize());
require("./config/passport")(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/snippets", snippets);
app.use("/api/comments", comments);
app.use("/api/likes", likes);
app.use("/api/images", uploadImg);
app.use("/api/fans", fans);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
