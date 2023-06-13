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

// const message: string | number = 5;
// const messages: string[] | number[] = ["a", "b"];
// function printMsg(msg: string | number | boolean): void {
//   if (typeof msg === "string" || typeof msg === "number") {
//     console.log(msg.toString());
//   } else {
//     console.log(msg);
//   }
// }

// function printMsg(msg: string[] | number | boolean): void {
//   if (Array.isArray(msg)) {
//     msg.forEach((m) => console.log(m));
//   } else if (typeof msg === "number") {
//     console.log(msg.toFixed());
//   } else {
//     console.log(msg);
//   }
// }

// printMsg(4);

// const printReadings = (a: number | string, b: number | boolean) => {
//   if (a === b) {
//     console.log(a, b);
//   }
// };

// const printReadings2 = (a: number[] | string) => {
//   console.log(a.slice(0, 3));
// };

// function checkReadings(readings: { system: number } | { user: number }): void {
//   if ("system" in readings) {
//     console.log(readings.system);
//   } else {
//     console.log(readings.user);
//   }
// }

// function logValue(x: string | Date) {
//   if (x instanceof Date) {
//     console.log(x.getDate());
//   } else {
//     console.log(x.trim);
//   }
// }

let msg: "Hello" = "Hello";
msg = "Hello";

// type Config = { protocol: "http" | "https"; port: 3000 | 3001 };

interface Config {
  protocol: "http" | "https";
  port: 3000 | 3001;
  log: (msg: string) => void;
}

// type Role = {
//   role: string;
// };
// type ConfigWithRole = Config & Role;

interface Role {
  role: string;
}

interface ConfigWithRole extends Config, Role {}

const serverConfig: ConfigWithRole = {
  protocol: "https",
  port: 3001,
  role: "admin",
  log: (msg: string): void => console.log(msg),
};

// const backupConfig: ConfigWithRole = {
//   protocol: "http",
//   port: 3000,
//   role: "admin",
// };

type StartFunction = (
  protocol: "http" | "https",
  port: 3000 | 3001,
  log: (msg: string) => void
) => string;

const startServer: StartFunction = (
  protocol: "http" | "https",
  port: 3000 | 3001,
  log: (msg: string) => void
): "Server started" => {
  log(`Server started on ${protocol}://server:${port}`);

  return "Server started";
};

startServer(serverConfig.protocol, serverConfig.port, serverConfig.log);

// type AnimationTimingFunc = "ease" | "ease-out" | "ease-in";
// type AnimationID = string | number;

// function createAnimation(
//   id: AnimationID,
//   animName: string,
//   timingFunc: AnimationTimingFunc = "ease",
//   duration: number,
//   iterCount: "infinite" | number
// ): void {
//   // const elem = document.querySelector(`#${id}`) as HTMLElement;
//   // if (elem) {
//   console.log(`${animName} ${timingFunc} ${duration} ${iterCount}`);
//   // elem.style.animation = `${animName} ${timingFunc} ${duration} ${iterCount}`;
//   // }
// }

// createAnimation("id", "fade", "ease-in", 5, "infinite");

interface Styles {
  [key: string]: string;
}

const styles = {
  position: "absolute",
  top: "20px",
  left: "50px",
};

let salary: number;
salary = 500;

interface User {
  login: string;
  password: string;
  age: number;
  // addr?: string;
  addr: string | undefined;
  parents?: {
    mother?: string;
    father?: string;
  };
}

const user: User = {
  login: "first!",
  password: "qwerty",
  age: 50,
  addr: "jdkdjb",
};

const dbName = "12345";
function sendUserData(obj: User, db?: string): void {
  console.log(obj.parents!.father?.toLowerCase(), db?.toLowerCase());
}
