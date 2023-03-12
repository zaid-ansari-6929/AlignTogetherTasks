const express = require("express");

const app = express();

const cors = require("cors");

app.use(express.json());

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/newUser").then((_) => {
  console.log("connected to mongodb");
});

const postSchema = new mongoose.Schema(
  {
    username: String,
    email: String,
    password: String,
    posts: [],
  },
  { timestamps: true }
);

const postModel = mongoose.model("posts", postSchema);

app.use(cors());

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  const user = await postModel.findOne({ email: email, password: password });

  if (user) {
    success: true,
    res.json({
      message: "login successfully",
      user: user,
    });
  } else {
    res.status(401).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

app.post("/posts", async (req, res) => {
  const posts = [];
  const { user_id, status } = req.body;
  const user = await postModel.findOne({ _id: user_id });
  posts.push(...user.posts);
  posts.push(status);
  user.posts = posts;
  await user.save();
  res.json({
    success: true,
    message: "post saved successfully",
    user: user,
  });
});

app.post("/postsData", async (req, res) => {
  let perPage = 10;
  console.log(req.body);
  let { start_date, end_date, page } = req.body;
  const filters = {
    createdAt: {
      $gte: start_date,
      $lt: end_date,
    },
  };
  const allPosts = await postModel
    .find({})
    .where(filters)
    .skip(perPage * (page - 1))
    .limit(perPage);
  res.json({
    message: "post fetched",
    allPosts,
  });
});

app.listen(4000, () => {
  console.log("connected to port", 4000);
});
