/*eslint-disable*/
export default function updateStudentGradeByCity(student ,city, newGrades) {
  return student
    .filter(student => student.location === city)
    .map( student => {
        const gradeObj = newGrades.find(grade=> grade.studentId === student.id);
        return {
            grade: gradeObj ? gradeObj.grade : 'N/A',
        };
    });
}