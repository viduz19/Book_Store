const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://bookstore19:sanduni19@cluster0.et0sp.mongodb.net/bookstore?retryWrites=true&w=majority&appName=Cluster0"
)
.then(()=>console.log("Connected"))
.catch((error) => console.error("MongoDB connection error:", error));
