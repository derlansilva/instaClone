const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");


const PostagensSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },

    createdAt: {
        type : Date,
        default : Date.now,
    },
})


PostagensSchema.plugin(mongoosePaginate)

mongoose.model("Postagens" , PostagensSchema)