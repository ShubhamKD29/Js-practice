let marks = "50hgf";
let test = null;
console.log(typeof marks); 

//also write the above conole.log(typeof (marks)) as method with parameters

let valueInNumber = Number(marks);
let testValue = Number(test);

//type is number but actually not a number
console.log(typeof valueInNumber);

// Value is NaN 
console.log(valueInNumber); 
// type is number
console.log(typeof testValue);
// Value is 0(zero) 
console.log(testValue); 


// converting Number(1/0) into Boolean 

let loggedIn = 1;
let booleanIsLoggedIn = Boolean(loggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0=>false
// "" =>false
//"shubham" =>true