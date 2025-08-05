const student = {
  name: "Dev",
  age: 20,
  listMonHoc: [
    { subject: "Math", score: 9 },
    { subject: "English", score: 7.5 },
    { subject: "Physics", score: 6 },
    { subject: "Literature", score: 8.5 },
  ],
};
function getRank(score) {
  if (score >= 8.5) return "Học sinh giỏi";
  else if (score >= 7) return "Học sinh khá";
  else if (score >= 5) return "Học sinh trung bình";
  else return "Học sinh yếu";
}
const getStudentSummary = (student) => {
  const scores = student.listMonHoc.map((m) => m.score);
  const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
  const sortedSubject=[...student.listMonHoc].sort((a, b) => b.score - a.score);
  console.log(`${student.name} is ${student.age} years old.`);
  console.log(`Average score: ${average} -> ${getRank(average)}`);
  console.log(
    `Best subject: ${sortedSubject[0].subject} (${sortedSubject[0].score})`
  );
  console.log(
    `Weakest subject: ${sortedSubject[3].subject} (${sortedSubject[3].score})`
  );
};
getStudentSummary(student);
