const Post = require('../models/Post')

module.exports = {
    async index(req, res) {
        const posts = await Post.find({}).sort('-createdAt')
        return res.json(posts)
    },

    async store(req, res) {
        console.log('body', req.body)
        const post = await Post.create(req.body)
        return res.json(post)
    },

    async update(req, res) {
        const post = await Post.findById(req.params.id)

        post.set({
            title: req.body.title,
            content: req.body.content,
            tags: req.body.tags
        })

        await post.save()
        return res.json(post)
    },

    async delete(req, res) {
        const post = await Post.findById(req.params.id)

        await post.delete()

        return res.json({
            message: "Postagem excluída",
            id: post._id
        })
    }
}