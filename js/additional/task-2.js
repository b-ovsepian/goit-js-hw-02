// == task-2 == //
// Написати ф-ю countVowels яка буде приймати строку і буде вертати кількість голосних літер.
// aeiouAEIOU - рядок з голосними в англ алфавіті

// countVowels('the quick brown fox') // 5

const countVowels = function (str) {
  let newString = str.toLowerCase();
  const array = newString.split("");
  let count = 0;
  for (const iterator of array) {
    if (
      iterator === "a" ||
      iterator === "e" ||
      iterator === "i" ||
      iterator === "o" ||
      iterator === "u"
    ) {
      count++;
    }
  }
  return count;
};

console.log(countVowels("the quick brown fox"));
