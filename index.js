const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./config/db");
//creates the server
const app = express();

//connect to the mongo db database
connectDB();

//allows interaction between multiples urls
app.use(cors());

app.use(express.json({ extended: true }));

//Routes
app.use("/api/products", require("./routes/get_product_route"));
app.use("/api/createproduct", require("./routes/create_product_route"));
app.use("/api/deleteproduct", require("./routes/delete_product_route"));
app.use("/api/updateproduct", require("./routes/update_product_route"));
app.use("/api/category", require("./routes/get_products_of_category"));
app.use("/api/flavor", require("./routes/get_products_of_flavor"));
app.use("/api/flavors", require("./routes/get_flavors_route"));
const port = process.env.port || 4000;

app.listen(port, "0.0.0.0", () => {
  console.log(`The server is running in the port ${port}`);
});
