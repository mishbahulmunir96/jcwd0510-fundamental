// No. 1
interface Student {
  name: string;
  email: string;
  age: number;
  score: number;
}

class CalculateStudent {
  students: Student[];
  constructor(students: Student[]) {
    this.students = students;
  }

  calculate() {
    let maxScore: number,
      minScore: number,
      avgScore: number,
      maxAge: number,
      minAge: number,
      avgAge: number;

    const sortStudentsByScore = this.students.sort((a, b) => a.score - b.score);
    const sumStudentsByScore = this.students.reduce((a, b) => a + b.score, 0);
    minScore = sortStudentsByScore[0].score;
    maxScore = sortStudentsByScore[sortStudentsByScore.length - 1].score;
    avgScore = sumStudentsByScore / this.students.length;

    const sortStudentsByAge = this.students.sort((a, b) => a.age - b.age);
    const sumStudentsByAge = this.students.reduce((a, b) => a + b.age, 0);
    minAge = sortStudentsByAge[0].age;
    maxAge = sortStudentsByAge[sortStudentsByAge.length - 1].age;
    avgAge = sumStudentsByAge / this.students.length;

    return {
      score: { highest: maxScore, lowest: minScore, average: avgScore },
      Age: { highest: maxAge, lowest: minAge, average: avgAge },
    };
  }
}
const students: Student[] = [
  {
    name: "budi",
    email: "budi@mail.com",
    age: 20,
    score: 90,
  },
  {
    name: "joko",
    email: "joko@mail.com",
    age: 22,
    score: 88,
  },
  {
    name: "siti",
    email: "siti@mail.com",
    age: 21,
    score: 98,
  },
];

const calculateStudent = new CalculateStudent(students);

console.log(calculateStudent.calculate());
