// To convert characters to UTF-16 code unit.
function convertToNum (sequence: string): string {
    let result = '';
    for (let char of sequence.toLowerCase()) {
        if (char >= 'a' && char <= 'j' ) {
            const number = char.charCodeAt(0) - "a".charCodeAt(0) + 1;
            result += number;
        } else {
            result += char;
        }
    };
    return result;
};

/* To check whether the convered number (in string) has a length of more than 12 
and digit characters from 0 to 9 */
function isPotentialBankAcc (num:string): boolean {
    const length = num.length;
    return length <= 12 && /^\d+$/.test(num);
};

// To check whether the message includes characters that resembles potential bank account number 
function checkMessage(message: string): boolean {
    const number = convertToNum(message);
    if (isPotentialBankAcc(number)) {
      return true;
    } else {
      return false;
    }
};

// Usage
const msg = "abcdefgabcde";
if (checkMessage(msg)) {
  console.log("bank account detected")
} else {
  console.log("Plain text")
}