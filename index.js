// Code your solution here
// findMatching- This function takes an array of drivers' names and a string as arguments, 
// and returns the matching list of drivers. The function should be case insensitive.
// fuzzyMatch - This function takes an array of drivers' names and a string as arguments for 
// querying the array, and returns all drivers whose names begin with the provided letters.
// matchName - This function takes an array of driver objects and a string
//  as arguments. Each driver object has two properties: name and hometown. The function 
// should return each element whose name property matches the provided string argument.
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers,str){
    return drivers.filter(drivers => drivers.toUpperCase()===(str.toUpperCase()))
}
function fuzzyMatch(drivers, str) {
    return drivers.filter(drivers => drivers.toLowerCase().substring(0, str.length) === str.toLowerCase())
  }
  
  function matchName(drivers, str) {
    return drivers.filter(drivers => drivers.name === str)
  }
