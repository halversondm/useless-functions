/**
 * Created by Daniel on 6/12/2016.
 */

import name from "./name";
import address from "./address";

class Person {

  constructor(firstName, middleInitial, lastName, street, city, state, zip,
              countryCode) {
    this.firstName = firstName;
    this.middleInitial = middleInitial;
    this.lastName = lastName;
    this.street = street;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.countryCode = countryCode;
  }

  details() {
    return name(this.firstName, this.middleInitial, this.lastName) + "\n" +
      address(this.street, this.city, this.state, this.zip, this.countryCode);
  }
}

export default Person;
