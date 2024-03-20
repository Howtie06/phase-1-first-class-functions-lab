// Code your solution in this file!
// returnFirstTwoDrivers function
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  }
  
  // returnLastTwoDrivers function
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  }
  
  // selectingDrivers array containing the two functions
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // createFareMultiplier higher-order function
  const createFareMultiplier = function(integer) {
    return function(fare) {
      return fare * integer;
    }
  }
  
  // fareDoubler function
  const fareDoubler = createFareMultiplier(2);
  
  // fareTripler function
  const fareTripler = createFareMultiplier(3);
  
  // selectDifferentDrivers function
  const selectDifferentDrivers = function(drivers, func) {
    return func(drivers);
  }
  
  // Example usage
  const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
  console.log(returnFirstTwoDrivers(drivers)); // Output: ['Antonia', 'Nuru']
  console.log(returnLastTwoDrivers(drivers)); // Output: ['Amari', 'Mo']
  console.log(selectingDrivers); // Output: [ [Function: returnFirstTwoDrivers], [Function: returnLastTwoDrivers] ]
  console.log(createFareMultiplier(4)(10)); // Output: 40
  console.log(fareDoubler(10)); // Output: 20
  console.log(fareTripler(10)); // Output: 30
  console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); // Output: ['Antonia', 'Nuru']
  console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers)); // Output: ['Amari', 'Mo']