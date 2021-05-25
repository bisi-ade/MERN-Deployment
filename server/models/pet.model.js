const mongoose = require("mongoose")


const PetSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true, "Pet name is required"],
        minlength:[3,"Pet name must be at least three characters"]
    },
    typepet: {
        type:String,
        required: [3, "Type of pet is required (e.g., dog or cat)"],
        minlength:[3,"Pet type must be at least three characters"]
    },
    desc: {
        type:String,
        required:[true, "Pet description is required"],
        minlength:[3,"description must be at least three characters"]
    },
    skill1: {
        type:String,
        default:"nothing"
    },
    skill2: {
        type:String,
        default:"nothing"
    },
    skill3: {
        type:String,
        default:"nothing"
    },

}, { timestamps: true })

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;