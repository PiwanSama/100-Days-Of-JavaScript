let firstname = new String('Samalie');
let lastname = new String('Piwan');
var fullname = firstname.concat(lastname);
console.log(fullname);

//split function
let mymail = 'piwan.summerlee@gmail.com';
let username = mymail.split('@');
console.log(username);

//slice function used by grayhat
let graymail = 'grayhat@gmail.com';
let hisname = graymail.slice(0,graymail.indexOf('@'));
console.log(hisname);

//indexOf function
let bettystring = 'betty bought a bit of butter';
let index = bettystring.indexOf('t');
console.log(index);

//lastIndexOf method
let lastIndex = bettystring.lastIndexOf('t');
console.log(lastIndex);

//charAt method
let characterAt = bettystring.charAt(2);
console.log(characterAt);

//charCodeAt method
let charCode = bettystring.charCodeAt(2);
console.log(charCode);

//substring method
let javascriptString = 'JavaScript Substring';
let substring = javascriptString.substring(0,2);
console.log(substring);

//slice method again somehow
let appleString = 'Apples are round and juicy';
let sliced = appleString.slice(2,4);
console.log(sliced);

//trim method
let sillystring = '  hacker haha ';
let trimmed = sillystring.trim();
console.log(trimmed);

//HTML TAGS
let linkUrl = 'www.google.com';
let link = linkUrl.anchor();

console.log(link);