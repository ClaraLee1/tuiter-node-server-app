import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: {type: String, required: true},
    likes: {type: Number, default: 0},
    liked: {type: Boolean, default: false},
}, {collection: 'tuits'});
export default schema;