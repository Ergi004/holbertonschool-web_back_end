/*eslint-disable*/
export default function updateStudentGradeByCity(student ,city, newGrades) {
  return student
    .filter(student => student.location === city)
    .map( student => {
        const gradeObj = newGrades.find(grade=> grade.studentId === student.id);
        return {
            ...student,
            grade: gradeObj ? gradeObj.grade : 'N/A',
        };
    });
}