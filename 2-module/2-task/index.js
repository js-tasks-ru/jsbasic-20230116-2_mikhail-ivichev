function isEmpty(obj) {
  // ваш код...
  for (let k in obj) {
    return false;
  }
  return true;
}
let schedule = {};

console.log(( isEmpty(schedule) )); 

schedule["8:30"] = "подъём";

console.log(( isEmpty(schedule) ));