import React from 'react'
import Increase from './components/Increase'
import UserList from './components/UserList'
import LoginForm from './components/LoginForm'
import ColorPicker from './components/ColorPicker'
import InputText from './components/InputText '
import InputRadio from './components/InputRadio '
import Exercise07 from './components/Exercise07'

export default function App() {
  return (
    <div>
      <Increase /> <br /> <hr /> <br />
      <UserList />
      <br /> <hr /> <br />
      <LoginForm />
      <br /> <hr /> <br />
      <ColorPicker />
      <br /> <hr /> <br />
      <InputText />
      <br /> <hr /> <br />
      <InputRadio />
      <br /> <hr /> <br />
      <Exercise07 />
      <br /> <hr /> <br />
    </div>
  );
}
