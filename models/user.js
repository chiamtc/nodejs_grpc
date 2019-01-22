/**
 * Created by soc-mba-32 on 03/03/18.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let user = new Schema({
    "email": {
        type: String,
        required: true
    },
    "password": {
        type: String,
        required: true
    }
}, {strict: true});

const User = mongoose.model('user',user);

module.exports = User;
