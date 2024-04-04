const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/products.model");
const productsRoute = require("./routes/product.route");
const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.use("/api/products", productsRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server");
});

mongoose
  .connect(
    "mongodb+srv://manishpauldev:yZDq8vBPs2kL1HgO@projectcrud.u7655yv.mongodb.net/Node-API?retryWrites=true&w=majority&appName=ProjectCRUD"
  )
  .then(() => {
    console.log("Connected to DB.");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection Failed");
  });
