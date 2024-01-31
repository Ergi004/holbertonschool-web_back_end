/*eslint-disable*/
export default function getStudentIdsSum(getListStudents) {
  const sumOfId = getListStudents.reduce((accumulator, getListStudents) => accumulator + getListStudents.id, 0);
  return sumOfId;
}