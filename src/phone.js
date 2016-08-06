/**
 * Created by Daniel on 7/15/2016.
 */
"use strict";

function phone(countryCode, areaCode, phoneNumber) {
  return "+" + countryCode + "-" + areaCode + "-" + phoneNumber;
}

export {phone};
