const express = require("express")
const app = express();
const port = 8000;
const cors = require("cors")


app.use(express.json()); //allows us to use json
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.get("/api", (req, res) => {
    res.json({ message: "Pet Shelter server is responding?" });
});



//require our other modularized files such as (routes,config)
require("./server/config/database.config")
require("./server/routes/pet.routes")(app)



//make it so that our server can listen for requests on port 8000
app.listen(port, () => console.log(`Listening on port ${port}`));