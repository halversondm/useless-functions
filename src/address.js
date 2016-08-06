/**
 * Created by Daniel on 6/12/2016.
 */
"use strict";

function valueCheck(aString) {
  if (aString !== null && aString !== "") {
    return aString + "\n";
  }

  return null;
}

function address(street, city, state, zip, countryCode) {
  let addressLine = valueCheck(street);

  addressLine += valueCheck(city);
  addressLine += valueCheck(state);
  addressLine += valueCheck(zip);
  addressLine += valueCheck(countryCode);

  return addressLine;
}

export {address};

