const mongoose = require("mongoose")


const userRoleSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    }
    // Todo: Add user policy
})
// Working model
const UserRoleSchema = mongoose.Schema({
    userName: String,
    email: String,
    fullName: String,

}, {
    timestamps: true
});

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    userRoles: [userRoleSchema]
})
module.exports = mongoose.model('UserRole', UserRoleSchema)