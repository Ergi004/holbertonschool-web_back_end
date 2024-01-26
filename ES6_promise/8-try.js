/*eslint-disable*/
export default function divideFunction(numerator, denominator) {
  if (denominator === 0 && numerator / denominator) {
    throw new Error("cannot devide by 0");
  } else {
    return numerator / denominator;
  }
}