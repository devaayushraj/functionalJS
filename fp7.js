const studentGrades = [
  { name: "soma", grades: "100" },
  { name: "Yuvi", grades: "90" },
  { name: "bhuvi", grades: "80" },
];

console.log(studentGrades[0]);
const greatStudent = studentGrades.map(grades);

function grades(marks) {
  if (marks.grades > 90) {
    return ` Great Job ${marks.name} you got ${marks.grades}`;
  } else if (marks.grades > 80) {
    return ` GOOD Job ${marks.name} you got ${marks.grades}`;
  } else if (marks.grades > 70) {
    return `Cool Job ${marks.name} you got ${marks.grades}`;
  }
}

console.log(greatStudent);
