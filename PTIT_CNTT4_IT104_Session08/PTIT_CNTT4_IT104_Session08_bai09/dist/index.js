"use strict";
class UserComment {
    constructor(id, userId, content, replies = []) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.replies = replies;
    }
    addReply(reply) {
        this.replies.push(reply);
    }
}
class Post {
    constructor(id, userId, content, likes = [], comments = []) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.likes = likes;
        this.comments = comments;
    }
    addLike(userId) {
        if (!this.likes.includes(userId)) {
            this.likes.push(userId);
        }
    }
    addComment(comment) {
        this.comments.push(comment);
    }
}
class User {
    constructor(id, posts = [], followers = []) {
        this.id = id;
        this.posts = posts;
        this.followers = followers;
    }
    createPost(content) {
        const newPost = new Post(Date.now(), this.id, content);
        this.posts.push(newPost);
        return newPost;
    }
    comment(post, commentContent) {
        const newComment = new UserComment(Date.now(), this.id, commentContent);
        post.addComment(newComment);
    }
    follow(user) {
        if (!this.followers.includes(user)) {
            this.followers.push(user);
        }
    }
    likePost(post) {
        post.addLike(this.id);
    }
    viewFeed() {
        let feed = [];
        this.followers.forEach(user => {
            feed = feed.concat(user.posts);
        });
        return feed;
    }
}
const user1 = new User(1);
const user2 = new User(2);
const user3 = new User(3);
const post1 = user1.createPost("Hello world!");
const post2 = user2.createPost("Hôm nay trời đẹp!");
user3.follow(user1);
user3.follow(user2);
console.log("Feed của user3:");
user3.viewFeed().forEach(post => {
    console.log(`Post ID: ${post.id}, Content: ${post.content}`);
});
user3.likePost(post1);
user3.comment(post1, "Bài viết như pịa!");
console.log("\nThông tin Post1:");
console.log(post1);
if (post1.comments.length > 0) {
    const reply = new UserComment(Date.now(), user1.id, "Cảm ơn bạn!");
    post1.comments[0].addReply(reply);
}
console.log("\nPost1 sau khi có reply:");
console.log(post1);
