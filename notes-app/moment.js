// Unix Epoch - Jaunary 1st 1970 00:00:00

const now = new Date();
const timestamp = now.getTime();

const myDate = new Date(timestamp);
console.log(myDate.getFullYear());

// console.log(`Year: ${now.getFullYear()}`);
// console.log(`Month: ${now.getMonth()}`);
// console.log(`Day of month: ${now.getDate()}`);
// console.log(`Hour: ${now.getHours()}`);
// console.log(`Minutes: ${now.getMinutes()}`);
// console.log(`Seconds: ${now.getSeconds()}`);

const dateOne = new Date('June 1 2018 12:00:00');
const dateTwo = new Date();

const dateOneTimestamp = dateOne.getTime();
const dateTwotimestamp = dateTwo.getTime();

if (dateOneTimestamp < dateTwotimestamp) {
  console.log(dateOne.toString());
} else if (dateTwotimestamp < dateOneTimestamp) {
  console.log(dateTwo.toString());
};
