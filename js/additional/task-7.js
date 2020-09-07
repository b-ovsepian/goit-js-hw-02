// == task-7 == //
// Написати ф-ю яка приймає масив і видаляє звідти всі унікальні елементи

const nonUniqueElements = function (array) {
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    let element = array.splice(i, 1);
    console.log(`delete - ${element}`);
    console.log(array);
    if (array.includes(element[0])) {
      console.log("est v masive");
      array.splice(i, 0, element[0]);
      console.log(`masiv posle ${array}`);
    } else {
      i = i - 1;
    }
  }
  return console.log(array);
};
nonUniqueElements([1, 2, 3, 1, 3]); // [1, 3, 1, 3]s
// nonUniqueElements([1, 2, 3, 4, 5]); // []
// nonUniqueElements([5, 5, 5, 5, 5]); // [5, 5, 5, 5, 5]
// nonUniqueElements([10, 9, 10, 10, 9, 8]); // [10, 9, 10, 10, 9]
