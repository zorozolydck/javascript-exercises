
 let  firstName= "Carlos"
 let lastName = "Stevenson"
 let thisYear =  1965
 let birthYear= 1947

 let age = thisYear - birthYear

 let fullname = firstName + " " + lastName

//  The greeting should read: "Hello! My name is Carlos Stevenson and I am 18 years old."

let greeting = "Hello! My name is" + fullname + "and I am " + age + "years old."

// Add your code right below, good luck!






// Do not change this
module.exports = {
  firstName: typeof firstName === 'undefined' ? undefined : firstName,
  lastName: typeof lastName === 'undefined' ? undefined : lastName,
  thisYear: typeof thisYear === 'undefined' ? undefined : thisYear,
  birthYear: typeof birthYear === 'undefined' ? undefined : birthYear,
  greeting: typeof greeting === 'undefined' ? undefined : greeting,
  fullName: typeof fullName === 'undefined' ? undefined : fullName,
  age: typeof age === 'undefined' ? undefined : age
}
