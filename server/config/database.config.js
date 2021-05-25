const mongoose = require('mongoose');       // Require Mongoose
const db_name = "pet_db"


//Connectiong to Mongo Database with Mongoose
mongoose.connect(`mongodb://localhost/${db_name}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));