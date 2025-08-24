import React, { Component } from "react";
import Exercise01 from "./components/PTIT_CNTT4_IT104_Session15_bai01/Exercise01";
import Exercise03 from "./components/PTIT_CNTT4_IT104_Session15_bai03/Exercise03";
import Exercise04 from "./components/PTIT_CNTT4_IT104_Session15_bai04/Exercise04";
import Exercise02 from "./components/PTIT_CNTT4_IT104_Session15_bai02/Exercise02";
import ListPost from "./components/PTIT_CNTT4_IT104_Session15_bai06/ListPost";
import Clock from "./components/PTIT_CNTT4_IT104_Session15_bai07/Clock";
import Counter from "./components/PTIT_CNTT4_IT104_Session15_bai08/Counter";
import TodoListIndex from "./components/PTIT_CNTT4_IT104_Session15_bai09/TodoListIndex";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Exercise01 /> */}
        {/* <Exercise02/> */}
        {/* <Exercise03/> */} 
        {/* <Exercise04/> */}
        {/* <ListPost/> */}
        {/* <Clock/> */}
        {/* <Counter/> */}
        <TodoListIndex/>
      </div>
    );
  }
}
