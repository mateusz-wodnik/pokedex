/**
 * Transform array to dictionary
 * @param arr - array - array to transform
 * @param field - string - field to use as key in dictionary
 */
export default function arrToDict(arr, field = 'id') {
  const dict = {};
  arr.forEach((item) => { dict[item[field]] = item; });
  return dict;
}
