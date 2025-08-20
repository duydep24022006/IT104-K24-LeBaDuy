import React, { Component } from "react";

interface Person {
  Id: number;
  Name: string;
  Age: number;
}
interface State {
  people: Person[];
}
export default class Exercise03 extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      people: [
        { Id: 1, Name: "John", Age: 30 },
        { Id: 2, Name: "Alice", Age: 25 },
        { Id: 3, Name: "Bob", Age: 28 },
      ],
    };
  }
  render() {
    return (
      <div>
        <table
          border={1}
          cellPadding={10}
          style={{ borderCollapse: "collapse" }}
        >
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {this.state.people.map((user) => (
              <tr key={user.Id}>
                <td>{user.Id}</td>
                <td>{user.Name}</td>
                <td>{user.Age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
