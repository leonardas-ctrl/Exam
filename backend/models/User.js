import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 50
    },
    email: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 50
    },
    dateAndTime: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true
    }
})

const User = mongoose.model('User', userSchema);

export default User;