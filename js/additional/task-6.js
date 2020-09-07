// == task-6 == //
// Написати ф-ю rgbToHex яка приймає колір в форматі rgb і повертає колір в форматі hex

function rgbToHex(r, g, b) {
  const array = Array.from(arguments);
  for (let index = 0; index < array.length; index++) {
    let hex = array[index].toString(16);
    array[index] = hex.length == 1 ? "0" + hex : hex;
  }

  return "#" + array.join("");
}

console.log(rgbToHex(0, 51, 255)); // #0033ff
