{
  // type guards
  // typeof --> type guard

  type Alphaneumeric = string | number;
  const add = (param1: Alphaneumeric, param2: Alphaneumeric): Alphaneumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };
  //instance
  const result1 = add("20", "30");
  console.log(result1); // "2030"

  //in guard
  type NormalUser = {
    name: string;
  };
  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      return `I am an admin and my role is ${user.role}`;
    } else {
      return `I am a normal user`;
    }
  };

  const normalUser1: NormalUser = { name: "Mr.X" };
  const adminUser1: AdminUser = { name: "Mr.Y", role: "admin" };

  console.log(getUser(normalUser1)); // I am a normal user
  console.log(getUser(adminUser1)); // I am an admin and my role is admin
}
