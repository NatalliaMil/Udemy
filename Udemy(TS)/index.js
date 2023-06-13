// const userData = {
//   isBirthdayData: true,
//   ageData: 40,
//   userNameData: "John",
//   messages: {
//     error: "Error",
//   },
// };
// const userDataTuple: [boolean, number, ...string[]] = [
//   true,
//   40,
//   "John",
//   "Ann",
//   "Ivan",
// ];
// const res = userDataTuple.map((t) => `${t}-data`);
// const [bthd, age, userName] = userDataTuple;
// const createError = (msg: string) => {
//   throw new Error(msg);
// };
// function logBirthday({
//   isBirthdayData,
//   userNameData,
//   ageData,
//   messages: { error },
// }: {
//   isBirthdayData: boolean;
//   userNameData: string;
//   ageData: number;
//   messages: { error: string };
// }): string {
//   if (isBirthdayData) {
//     return `Congrats ${userNameData.toUpperCase()}, age: ${ageData + 1}`;
//   } else {
//     return createError(error);
//   }
// }
// console.log(logBirthday(userData));
// const departments: string[] = ["dev", "design", "marketing"];
// const department = departments[0];
// const report = departments
//   .filter((d: string) => d !== "dev")
//   .map((d: string) => `${d} - done`);
// const nums: number[][] = [
//   [3, 4, 5],
//   [3, 4, 5],
// ];
// const [first] = report;
// console.log(first);
var message = 5;
var messages = ["a", "b"];
// function printMsg(msg: string | number | boolean): void {
//   if (typeof msg === "string" || typeof msg === "number") {
//     console.log(msg.toString());
//   } else {
//     console.log(msg);
//   }
// }
function printMsg(msg) {
    if (Array.isArray(msg)) {
        msg.forEach(function (m) { return console.log(m); });
    }
    else if (typeof msg === "number") {
        console.log(msg.toFixed());
    }
    else {
        console.log(msg);
    }
}
printMsg(4);
var printReadings = function (a, b) {
    if (a === b) {
        console.log(a, b);
    }
};
var printReadings2 = function (a) {
    console.log(a.slice(0, 3));
};
function checkReadings(readings) {
    if ("system" in readings) {
        console.log(readings.system);
    }
    else {
        console.log(readings.user);
    }
}
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.getDate());
    }
    else {
        console.log(x.trim);
    }
}
var msg = "Hello";
msg = "Hello";
var port3000 = 3000;
var port3001 = 3001;
function startServer(protocol, port) {
    if (port === port3000 || port === port3001) {
        console.log("Server started on ".concat(protocol, "://server:").concat(port));
    }
    else {
        console.error("Invalid port");
    }
    return "Server started";
}
startServer("https", 3000);
function createAnimation(id, animName, timingFunc, duration, iterCount) {
    if (timingFunc === void 0) { timingFunc = "ease"; }
    // const elem = document.querySelector(`#${id}`) as HTMLElement;
    // if (elem) {
    console.log("".concat(animName, " ").concat(timingFunc, " ").concat(duration, " ").concat(iterCount));
    // elem.style.animation = `${animName} ${timingFunc} ${duration} ${iterCount}`;
    // }
}
createAnimation("id", "fade", "ease-in", 5, "infinite");
