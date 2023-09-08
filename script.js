function firstNonRepeatedChar(str) {
 // Write your code here
	for (let i = 0; i < str.length; i++) {
  let s = str[i];
  let arr = str.match(new RegExp(s, "g"));

  if (arr.length == 1) {
    return str[i];
  }
}

return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
