// == task-8 == //
// Написати ф-ю median яка приймає масив і знаходить його медіану
// Медіана – це числове значення, яке ділить відсортований масив чисел
// на більшу і меншу половини.У відсортованому масиві з непарним числом
// елементів медіана – це число в середині масиву.Для масиву з парним числом
// елементів, де нема ні одного елемента точно посередині, медіана – це середнє значення двох чисел,
//   які знаходяться в середині масиву.В цій задачі заданий непустий масив натуральних чисел.
// Вам потрібно знайти медіану даного масиву.

const median = function (array) {
  if (array.length % 2 !== 0) {
    return console.log(array[Math.floor(array.length / 2)]);
  } else {
    const firstElement = array[Math.round(array.length / 2) - 1];
    const secondElement = array[Math.round(array.length / 2)];
    const average = (firstElement + secondElement) / 2;
    return console.log(average);
  }
};

// median([1, 2, 3, 4, 5]); // 3
median([3, 6, 10, 15, 20, 99]); // 12.5
