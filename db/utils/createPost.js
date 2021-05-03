const {Post} = require('../schemas/post');

async function createPost(userId) {
    try {
        const res = await Post.create({
            userId,
            imageURL: "https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        })
        console.log(res);
    } catch (e) {
        console.error(e)
    }
}

module.exports = {
    createPost
}
