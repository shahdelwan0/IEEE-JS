console.group("Group 1");
console.log("1");
console.log("2");

console.group("child group");
console.log(" first child");
console.log(" second child");

console.group("grand child group");
console.log(" first grand child");
console.log(" second grand child");

console.groupEnd();
console.groupEnd();
console.groupEnd(); 

console.group("Group 2");
console.log(" first grand child");
console.log(" second grand child");
console.groupEnd();
