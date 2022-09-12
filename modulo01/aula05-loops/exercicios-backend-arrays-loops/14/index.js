const arrayA = [5, 32, 3, 44, 1];
const arrayB = [57, 4, 21, 2, 13];

for (let a = 0; a < arrayA.length; a++) {
  let segundo = 0;
  for (b of arrayB) {
    segundo = arrayB[a];
  }
  if (arrayA[a] < segundo) {
    console.log(arrayA[a]);
  } else {
    console.log(arrayB[a]);
  }
}
