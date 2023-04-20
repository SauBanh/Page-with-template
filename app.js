const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.render("index", { pageTitle: "Add user" });
});

app.get("/users", (req, res) => {
    res.render("users", { pageTitle: "Users" });
});

app.post("/add-user", (req, res) => {
    res.redirect("/users");
});

app.listen(5657);
