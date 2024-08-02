# Bank Account Detector

This is a TypeScript utility that converts text into numerical codes (character unicode) and checks if the resulting number sequence resembles a potential bank account number.

The utility is designed to detect user chats where prohibited confidential information, like bank account numbers, may be exchanged in a disguise as an alphabet sequence. For example, the sequence "hchadibdiabdia" corresponds to "83-81-49-122491".

It includes functions to convert alphabetic characters to numerical representations and verify if the converted string consists solely of digits with specific length constraints.

## Features

- **convertToNum**: Converts each character in a string to a numerical code based on its position in the alphabet (a-j).
- **isPotentialBankAcc**: Checks if the given string is composed entirely of digits and has a length of 12 or fewer characters.
- **checkMessage**: Determines if a string contains characters that resemble a potential bank account number.

## Usage

### Example

```typescript
// Example usage of the Bank Account Detector

const msg = "abcdefgabcde";
if (checkMessage(msg)) {
  console.log("bank account detected");
} else {
  console.log("Plain text");
}
```

### Functions

#### convertToNum

```typescript
function convertToNum(sequence: string): string
```

Converts a given string into a string of numbers, where each alphabetic character from 'a' to 'j' is converted to a number corresponding to its position in the alphabet. Non-alphabetic characters are left unchanged.

#### isPotentialBankAcc

```typescript
function isPotentialBankAcc(num: string): boolean
```

Checks if the given string consists entirely of digits and has a length of 12 or fewer characters, suggesting it could be a bank account number.

#### checkMessage

```typescript
function checkMessage(message: string): boolean
```

Uses `convertToNum` and `isPotentialBankAcc` to determine if the provided message might contain a bank account number.

## Installation

To use this utility, clone the repository and include the `script.ts` file in your TypeScript project. Make sure to have TypeScript installed and configured.

```sh
git clone https://github.com/mightyoctopus/bank-account-detector.git
```