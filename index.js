function calculateTax(amount) {
    let taxAmount = amount * 0.1;
    return taxAmount;
}
console.log(calculateTax(100));

function convertToUpperCase(text) {
    let textToUppercase = text.toUpperCase();
    return textToUppercase;
}
console.log(convertToUpperCase("mississippi"));


function findMaximum(num1, num2) {
    let largestNumber = Math.max(num1, num2);
    return largestNumber;
}
console.log(findMaximum(100, 101));


function isPalindrome(word) {
    word = word.toLowerCase();
    let reversedWord = word.split("").reverse().join("");

    if (reversedWord === word) {
        return true;
    } else {
        return false;
    }
}
console.log(isPalindrome("Racecar"));


function calculateDiscountedPrice(originalPrice, discountPercentage) {
    let discountAmount = originalPrice * discountPercentage/100;
    let priceAfterDiscount = originalPrice - discountAmount;
    return priceAfterDiscount;
}
console.log(calculateDiscountedPrice(250, 15));




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };