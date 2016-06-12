/**
 * Created by Daniel on 6/12/2016.
 */

import {name} from "./name";
import {address} from "./address";

export class Person {

  details() {
    return name() + " " + address();
  }
}