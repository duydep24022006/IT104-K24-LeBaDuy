import React from 'react'
import Welcome from './components/Welcome'
import PageTitle from './components/PageTitle'
import Timer from './components/Timer'
import Ex1 from './components/Ex1'
import Ex2 from './components/Ex2'
import Ex6 from './components/Ex6'
import Ex7 from './components/Ex7'
import UserForm from './components/UserForm'
import Search from './components/Search'
import ArticleTracker from './components/ArticleTracker'

export default function App() {
  return (
    <div>
      <Ex1 /> <br />
      <hr /> <br />
      <Ex2 /> <br />
      <hr /> <br />
      <Welcome /> <br />
      <hr /> <br />
      <PageTitle /> <br />
      <hr /> <br />
      <Timer /> <br />
      <hr /> <br />
      <Ex6 /> <br />
      <hr /> <br />
      <Ex7 /> <br />
      <hr /> <br />
      <UserForm /> <br />
      <hr /> <br />
      <Search /> <br />
      <hr /> <br />
      <ArticleTracker/> <br />
      <hr /> <br />
    </div>
  );
}
