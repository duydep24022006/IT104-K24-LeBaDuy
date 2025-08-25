import React, { Component } from 'react'
import SubjectList from './components/PTIT_CNTT4_IT104_Session16_bai01/SubjectList'
import LoginStatus from './components/PTIT_CNTT4_IT104_Session16_bai02/LoginStatus'
import ButtonStyle from './components/PTIT_CNTT4_IT104_Session16_bai03/ButtonStyle';
import ClickCounter from './components/PTIT_CNTT4_IT104_Session16_bai04/ClickCounter';
import UserForm from './components/PTIT_CNTT4_IT104_Session16_bai05/UserForm';
import ThemeSwitcher from './components/PTIT_CNTT4_IT104_Session16_bai06/ThemeSwitcher';
import ShopMobile from './components/PTIT_CNTT4_IT104_Session16_bai07/ShopMobile';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <SubjectList />
        <hr />
        <br /> */}
        {/* <LoginStatus />
        <hr />
        <br /> */}
        {/* <ButtonStyle />
        <hr />
        <br /> */}
        {/* <ClickCounter />
        <hr />
        <br /> */}
        {/* <UserForm />?
        <hr />
        <br /> */}
        {/* <ThemeSwitcher/> */}
        <ShopMobile/>
      </div>
    );
  }
}
