// == task-7 == //
// Написати ф-ю яка приймає масив і видаляє звідти всі унікальні елементи

const nonUniqueElements = function (array) {
  if (array.length > 1) {
    for (let i = 0; i < array.length; i++) {
      let element = array.splice(i, 1);
      if (array.includes(element[0])) {
        array.splice(i, 0, element[0]);
      } else {
        i = -1;
      }
    }
  }
  return console.log(array);
};
nonUniqueElements([1, 2, 3, 1, 3]); // [1, 3, 1, 3]
nonUniqueElements([1, 2, 3, 4, 5]); // []
nonUniqueElements([5, 5, 5, 5, 5]); // [5, 5, 5, 5, 5]
nonUniqueElements([10, 9, 10, 10, 9, 8]); // [10, 9, 10, 10, 9]
