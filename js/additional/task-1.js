// == task-1 ==
// Написати ф-ю capitalize яка буде приймати строку і буде вертати нову строку де кожне слово буде починатися з великої літери.

// capitalize('the quick brown fox') // 'The Quick Brown Fox '

const capitalize = function (str) {
  const array = str.split(" ");
  for (let index = 0; index < array.length; index++) {
    array[index] = array[index][0].toUpperCase() + array[index].slice(1);
  }
  return array.join(" ");
};
console.log(capitalize("the quick brown fox"));
