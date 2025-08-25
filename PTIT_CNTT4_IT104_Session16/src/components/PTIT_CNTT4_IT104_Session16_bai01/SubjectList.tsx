import React, { Component } from "react";

type SubjectType = {
  Id: number;
  Subject: string;
};

type StateType = {
  subjectList: SubjectType[];
};
export default class SubjectList extends Component<{}, StateType> {
  constructor(preps: {}) {
    super(preps);
    this.state = {
      subjectList: [
        {
          Id: 1,
          Subject: "Toán",
        },
        {
          Id: 2,
          Subject: "Văn",
        },
        {
          Id: 3,
          Subject: "Anh",
        },
        {
          Id: 4,
          Subject: "Hóa",
        },
        {
          Id: 5,
          Subject: "Sinh",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <h2>Danh sách môn học</h2>
        <div>
          {this.state.subjectList.map((sub) => (
            <p key={sub.Id}>{sub.Subject}</p>
          ))}
        </div>
      </div>
    );
  }
}
