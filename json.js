var obj1 = {
  name: "Person 1",
  age: 5,
};
var obj2 = {
  age: 5,
  name: "Person 1",
};
function check(obj1, obj2) {
  return Object.keys(obj2).every(
    (val) => obj1.hasOwnProperty(val) && obj1[val] === obj2[val]
  );
}

console.log(check(obj1, obj2));
