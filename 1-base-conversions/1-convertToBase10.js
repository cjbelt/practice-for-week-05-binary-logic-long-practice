// Convert the integers in the console.logs below to base 10:

/******************************************************************************/

const convertToBase10 = str => {
  // Your code here
  let decimal = 0;

  if (str.includes('0b')) {
    let exponent = 0;

    for (let i = str.length - 1; i >= 2; i--) {
      decimal += str[i] * Math.pow(2, exponent);
      exponent++;
    }
  } else if (str.includes('0x')) {
    let exponent = 0;
    const letters = ['a', 'b', 'c', 'd', 'e', 'f'];
    const values = [10, 11, 12, 13, 14, 15];

    for (let i = str.length - 1; i >= 2; i--) {
      let value = letters.includes(str[i]) ? values[letters.indexOf(str[i])] : str[i];
      decimal += value * Math.pow(16, exponent);
      exponent++;
    }
  }

  return decimal;
};

/******************************************************************************/

console.log(convertToBase10('0b1100')); // 12
console.log(convertToBase10('0b0101')); // 5
console.log(convertToBase10('0b1000')); // 8
console.log(convertToBase10('0b0111')); // 7

console.log('––––––');

console.log(convertToBase10('0b10100101')); // 165
console.log(convertToBase10('0b11111111')); // 255
console.log(convertToBase10('0b01010101')); // 85
console.log(convertToBase10('0b00110011')); // 51

console.log('––––––');

console.log(convertToBase10('0xf')); // 15
console.log(convertToBase10('0xfa')); // 250
console.log(convertToBase10('0x1234')); // 4660
console.log(convertToBase10('0xc9a1')); // 51617
console.log(convertToBase10('0xbf12')); // 48914
