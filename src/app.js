require("dotenv").config();

const express = require("express");

const app = express();
//agregamos rutas
const authRoute = require("./routes/auth.routers");
const productdatailRoutes = require("./routes/productDatail.route");
const homeRouters = require("./routes/home.route");
const carRoutes = require("./routes/carts.route");

app.use("/auth", authRoute);
app.use("/", homeRouters);
app.use("/product-detail", productdatailRoutes);
app.use("/cart", carRoutes);

app.listen(porcess.env.PORT, (err) => {
    if (err){
        console.log("Server Error on init");
        console.log(err);
        return;
    }
    console.log("Listenig on pot " + process.env.PORT);
    return;
});