
module.exports = function toReadable(number) {

    let zerotwenty = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
    let decade = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
    let str = number.toString();
  
    if (number > 0 && number < 21 || number === 0) {
      return zerotwenty[number];
    }
  
    if (number > 20 && number < 100) {
      if (+str[1] === 0) {
        return `${decade[+str[0]]}`;
      } else {
        return `${decade[+str[0]]} ${zerotwenty[+str[1]]}`;
      }
    }
  
    if (number > 99 && number < 1000) {
      if (+str[1] === 0 && +str[2] === 0) {
        return `${zerotwenty[+str[0]]} hundred`;
      } else if (+str[1] === 0) {
        return `${zerotwenty[+str[0]]} hundred ${zerotwenty[+str[2]]}`;
      } else if (+str[1] === 1) {
        return `${zerotwenty[+str[0]]} hundred ${zerotwenty[+str[1] + str[2]]}`;
      } else if (+str[2] === 0) {
        return `${zerotwenty[+str[0]]} hundred ${decade[+str[1]]}`;
      } else {
        return `${zerotwenty[+str[0]]} hundred ${decade[+str[1]]} ${zerotwenty[+str[2]]}`;
      }
    }}
  
  