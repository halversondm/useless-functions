"use strict";

export default function name(firstName, middleInitial, lastName) {
  if (middleInitial !== null && middleInitial !== "") {
    return firstName + " " + middleInitial + ". " + lastName;
  }

  return firstName + " " + lastName;
}

