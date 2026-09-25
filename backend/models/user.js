const mongoose= require("mongoose")

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    username: {
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        unique: true
    },
    createat_at:{
        type:Date,
        default: Date.now
    }
})

module.exports = mongoose.model("User", userSchema)