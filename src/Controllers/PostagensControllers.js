const mongoose = require("mongoose");
const Posts = mongoose.model("Postagens");

module.exports={
    async index(req ,res ){
        const { page = 1 } = req.query;
        const post = await Posts.paginate({} , {page , limit : 10})

        return res.json(post);
    },

    async show(req , res){
        const post = await Posts.findById(req.params.id);

        return res.json(post);
    },

    async create(req, res){
        const post = await Posts.create(req.body);

        return res.json(post)
    },

    async update(req , res){
        const post = await Posts.findByIdAndUpdate(req.params.id , req.body , { new : true })

        return res.json(post);
    },

    async destroy(req , res) {
        await Posts.findByIdAndRemove(req.params.id)

        return res.json()
    }
}