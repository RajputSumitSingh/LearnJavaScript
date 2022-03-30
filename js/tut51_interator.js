// console.log("hellow rofjlsjf");

const value = ['Apple', 'Mango', 'Graphes', 'Gauva', 'Banana'];


function iteratorFun(value) {

  let count = 0;
  return {
    next: function () {

      if (count < value.length) {
        return {
          values: value[count++],
          done: false
        }
      } else {

        return {
          done: true
        }
      }
    }
  }
}

const fruits = iteratorFun(value);
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
// console.log(value);