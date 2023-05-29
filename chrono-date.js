/**
 * Today, Tomorrow, Yesterday, Last Friday, etc
 * 17 August 2013 - 19 August 2013
 * This Friday from 13:00 - 16.00
 * 5 days ago
 * 2 weeks from now
 * Sat Aug 17 2013 18:40:39 GMT+0900 (JST)
 * 2014-11-30T08:15:30-05:30
 */

import * as chrono from "chrono-node";

const output1 = chrono.parseDate(
  "I have An appointment on Sep 12-13, please make sure I'm free"
);

const output2 = chrono.parseDate(
  "I have An appointment 5 days ago, is it i am got it"
);

console.log(output2);
