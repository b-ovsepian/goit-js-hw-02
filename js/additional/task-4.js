// == task-4 == //
// Написати ф-ю що приймає число (температура в цельсіях) і виводить результат в фаренгейтах
// 10°C x 1,8 + 32 = 50°F

const convert = (int) => int * 1.8 + 32;
console.log(convert(10));