export default function arrToDict(arr) {
  const dict = {};
  arr.forEach((item) => { dict[item.id] = item; });
  return dict;
}
