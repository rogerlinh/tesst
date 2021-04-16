// let oppositeNumber = 0;
// function findOppositeNumber(n, inputNumber) {
//   let t = (n - 2) / 2;
//   if (inputNumber < n / 2) {
//     oppositeNumber = t + 1 + inputNumber;
//     console.log(oppositeNumber);
//   } else {
//     oppositeNumber = inputNumber - t - 1;
//     console.log(oppositeNumber);
//   }
// }
// findOppositeNumber(11, 9);

2; //

// let join = "";

// function merge2String(a, b) {
//   let aLength = a.length;
//   let bLength = b.length;
//   for (let i = 0; i < Math.min(aLength,bLength); i++) {
//     if (aLength > bLength) {
//       for (let t = bLength; t <= aLength; t++) {
//         join = join + a[t] + a[i] + b[i];
//       }
//     } else {
//       for (let t = aLength; t <= bLength; t++) {
//         join = join + a[t] + a[i] + b[i];
//       }
//     }
//   }
// }
// merge2String("abc", "1234");
// console.log(join);

3; //
let number = Math.random() * 100;
let form = document.getElementById("input");

form.onsubmit = (e) => {
  e.preventDefault();
  let inputNumber = form.number.value;
  console.log(inputNumber);
  for (i = 1; i <= 3; i++) {
    if (inputNumber == number) {
      alert("Chúc mừng bạn đoán đúng");
      document.getElementById("text").style.display = "block";
      document.getElementById("numberid").innerHTML = number;
      break
    } else {
      document.getElementById("text").style.display = "block";
      document.getElementById("text").innerHTML = "Nhập lại";
      
    }
  }
};
