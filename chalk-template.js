import chalkTemplate from "chalk-template";
import chalk from "chalk";

const cpu = {
  totalPercent: 12,
};

const ram = {
  used: 123,
  total: 1024,
};

const disk = {
  used: 123,
  total: 1024,
};

console.log(chalkTemplate`
CPU: {red ${cpu.totalPercent}%}
RAM: {green ${(ram.used / ram.total) * 100}%}
DISK: {rgb(255,131,0) ${(disk.used / disk.total) * 100}%}
`);

console.log(chalk.red.bgBlack(chalkTemplate`2 + 3 = {bold ${2 + 3}}`));

const miles = 18;
const calculateFeet = (miles) => miles * 5280;

console.log(chalkTemplate`
	There are {bold 5280 feet} in a mile.
	In {bold ${miles} miles}, there are {green.bold ${calculateFeet(miles)} feet}.
`);

console.log(chalkTemplate`
	There are also {#FF0000 shorthand hex styles} for
	both the {#ABCDEF foreground}, {#:123456 background},
	or {#ABCDEF:123456 both}.
`);
