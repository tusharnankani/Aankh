const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true,
        min: 2,
        max: 20
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    hash_password: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
    },
    test_code: { type: String, default: "none" },
    multi_window: { type: Number, default: 0 },
    full_screen: { type: Number, default: 0 },
    person_detected: { type: Number, default: 0 },
    voice_detected: { type: Number, default: 0 },
    face_covered: { type: Number, default: 0 },
    status: { type: String, default: "safe" }
}, { timestamps: true });

userSchema.virtual('password')
    .set(function (password) {
        this.hash_password = bcrypt.hashSync(password, 10);
    });

userSchema.methods = {
    authenticate: function (password) {
        return bcrypt.compareSync(password, this.hash_password);
    }
}

module.exports = mongoose.model('User', userSchema);