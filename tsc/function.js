function first(name) {
    console.log("Hello ".concat(name));
}
first("Manish");
var fun = function (user) {
    return "Hello second ".concat(user);
};
console.log(fun("User"));
function isPalindrome(str) {
    return str.toLowerCase() === str.split("").reverse().join("").toLocaleLowerCase();
}
console.log(isPalindrome("NAn"));
