/*eslint-disable*/
import getListStudents from "./0-get_list_students";
export default function getStudentIdsSum(getListStudents) {
  const sumOfId = getListStudents.reduce((accumulator, getListStudents) => accumulator + getListStudents.id, 0);
  return sumOfId;
}