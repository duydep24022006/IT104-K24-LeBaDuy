import React, { Component } from "react";

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}
interface Posts {
  post: Post;
}
export default class DetailPost extends Component<Posts> {
  render() {
    const { post } = this.props;
    return (
      <div style={{ marginBottom: "15px", borderBottom: "1px solid #aaa" }}>
        <p>
          <b>Id: {post.id}</b>
        </p>
        <p>
          <b>Title: {post.title}</b>
        </p>
        <p>
          <b>Content: {post.content}</b>
        </p>
        <p>
          <b>Author: {post.author}</b>
        </p>
      </div>
    );
  }
}
