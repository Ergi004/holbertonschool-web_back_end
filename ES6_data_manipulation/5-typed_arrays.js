/*eslint-disable*/
export default function createInt8TypedArray(position, length, number){
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  view.setInt8(position, number);
  console.log(view);
}
