// Code your solution here
const drivers = [
  {
    name: "Bobby",
    hometown: "Pittsburgh",
  },
  {
    name: "Sammy",
    hometown: "New York",
  },
  {
    name: "Sally",
    hometown: "Cleveland",
  },
  {
    name: "Annette",
    hometown: "Los Angeles",
  },
  {
    name: "Bobby",
    hometown: "Tampa Bay",
  },
];
const drivers1 = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];

// case insensitive means lowercase and uppercase to be equivalent
function findMatching(drivers, name) {
  const nameLowerCase = name.toLowerCase();
  return drivers.filter((driver) => driver.toLowerCase() === nameLowerCase);
}
//This is an example

const matchingDrivers = findMatching(drivers1, "BOBBY");
console.log(matchingDrivers);

function fuzzyMatch(drivers, letters) {
  const lettersFirst = letters.toUpperCase();
  // Convert lettersFirst to lowercase for case-insensitivity
  return drivers.filter((driver) =>
    driver.toUpperCase().startsWith(lettersFirst)
  );
}

//for this example
const matchingDrivers1 = fuzzyMatch(drivers1, "S");
console.log(matchingDrivers1);

function matchName(drivers, hometown) {
  return drivers.filter(
    (driver) => driver.name.toUpperCase() === hometown.toUpperCase()
  );
}

const matchingDrivers3 = matchName(drivers, "Bobby");
console.log(matchingDrivers);
