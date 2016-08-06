"use strict";

function name(firstName, middleInitial, lastName) {
  if (middleInitial !== null && middleInitial !== "") {
    return firstName + " " + middleInitial + ". " + lastName;
  }

  return firstName + " " + lastName;
}

export {name};

