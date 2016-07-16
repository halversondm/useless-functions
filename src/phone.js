/**
 * Created by Daniel on 7/15/2016.
 */
"use strict";

export default function phone(countryCode, areaCode, phoneNumber) {
  return "+" + countryCode + "-" + areaCode + "-" + phoneNumber;
}