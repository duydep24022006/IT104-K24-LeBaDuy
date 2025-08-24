import React, { Component } from "react";
interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}
export default class DetailPost extends Component<Post> {
  render() {
    const { id, title, content, author } = this.props;
    return (
      <div style={{ marginBottom: "20px" }}>
        <p>
          <b>Id:</b> {id}
        </p>
        <p>
          <b>Title:</b> {title}
        </p>
        <p>
          <b>Content:</b> {content}
        </p>
        <p>
          <b>Author:</b> {author}
        </p>
        <hr />
      </div>
    );
  }
}
