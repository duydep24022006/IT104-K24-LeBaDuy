import React from 'react'
import { useParams } from 'react-router-dom'
import { posts } from '../components/data';

export default function PostDetail() {
    const { id } = useParams();
    const postFind = posts.find(item => item.id === Number(id));

  return (
      <div>
          <h1>{postFind?.title}</h1>
          <p>{ postFind?.excerpt}</p>
    </div>
  )
}
