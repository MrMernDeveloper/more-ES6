const student = {
    name: 'kolim Uddin',
    age: 15,
    class: 10,
    marks: {
        math: 78,
        physics: 89,
        chemistry: 65
    }
}
const marks = student.marks;
const math = student.marks.math;
console.log(math);

// brakets notation
const chemistry = student['marks']['chemistry'];
console.log(chemistry);
const subject = 'math';
const subjectMarks = student.marks[subject];
console.log(subjectMarks);