let num = +prompt("Введите число");
if (typeof num === "number" && !Number.isNaN(num)) {
  if (num % 2 === 0) {
    console.log("Число четное.");
  } else {
    console.log("Число нечетное.");
  }
} else {
  console.log("Упс, кажется, вы ошиблись!");
}
