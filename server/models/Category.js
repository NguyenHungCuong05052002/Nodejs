const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    listChild:[String],
    createAt: {
        type: Date,
        default: Date.now 
    }
})

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;