/*eslint-disable*/
function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString === '') {
    return '';
  }
  
  let result = '';
  for (let item of set) {
    if (item.startsWith(startString)) {
      if (result !== '') {
        result += '-';
      }
      result += item.slice(startString.length);
    }
  }
  
  return result;
}
  
export default cleanSet;
  