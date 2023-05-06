//100,103,98,106,96... 짝수인덱스 = 100-2n 홀수 인덱스 = 100+3n
function getValueAtIndex(n) {
    const firstValue = 100;
    const addOrSubtract = n % 2 === 0 ? -2 : 3;
    const indexMultiplier = Math.floor(n / 2);
    return firstValue + addOrSubtract * indexMultiplier;
  }
  console.log(getValueAtIndex(5780))