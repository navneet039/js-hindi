let mydate = new Date();  // Current date & time

console.log(mydate.toString());        // e.g., "Mon May 26 2025 14:23:45 GMT+0530 (India Standard Time)"
console.log(mydate.toDateString());    // e.g., "Mon May 26 2025"
console.log(mydate.toJSON());          // e.g., "2025-05-26T08:53:45.123Z"  (ISO string in UTC)
console.log(mydate.toISOString());     // e.g., "2025-05-26T08:53:45.123Z"
console.log(mydate.toLocaleString());  // e.g., "5/26/2025, 2:23:45 PM" (depends on locale)
console.log(typeof mydate);             // "object"

let mycreatedate = new Date(2025, 0, 19, 5, 3);
// Note: month 0 = January
console.log(mycreatedate.toDateString());    // "Sun Jan 19 2025"
console.log(mycreatedate.toLocaleString());  // e.g., "1/19/2025, 5:03:00 AM" (locale-specific)

let newdate = new Date("02-19-2004");
console.log(newdate.toDateString());          // "Thu Feb 19 2004"

let mytimestamp = Date.now();
console.log(mytimestamp);                      // e.g., 1753681425123 (current timestamp in ms)

console.log(newdate.getTime());                // 1077158400000 (timestamp for Feb 19, 2004)

console.log(Math.floor(Date.now() / 1000));   // e.g., 1753681425 (current timestamp in seconds)

console.log(newdate.getDay());                 // 4  (Thursday, since Sunday=0)
console.log(newdate.getMonth() + 1);           // 2  (February, since months are zero-indexed)

console.log(
  newdate.toLocaleString('default', { weekday: "long" })  
);  // "Thursday"






