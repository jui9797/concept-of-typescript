{
    // spread operator
    const bros1  : string[] = ['Mario', 'Luigi', 'Peach'];
    const bros2  : string[] = ['Yoshi', 'Toad', 'Bowser'];
    bros1.push(...bros2); // spread operator
    console.log(bros1); // ['Mario', 'Luigi', 'Peach', 'Yoshi', 'Toad', 'Bowser']


    const mentors1 = {
        typescript: "Mezba",
        redux: "Mir",
        dbms: "Mizan",
      };
    
      const mentors2 = {
        prisma: "Firoz",
        next: "Tanmoy",
        cloud: "Nahid",
      };
    
      const mentorList = {
        ...mentors1,
        ...mentors2,
      };
      console.log(mentorList); // { typescript: 'Mezba', redux: 'Mir', dbms: 'Mizan', prisma: 'Firoz', next: 'Tanmoy', cloud: 'Nahid' }






    // rest operator
    const add = (...numbers: number[]) => {
        return numbers.reduce((acc, curr) => acc + curr, 0); // sum of all numbers
    };
    console.log(add(1, 2, 3, 4)); // 10
    console.log(add(1, 2, 3, 4, 5, 6)); // 21

    

    const greetFriends = (...friends: string[]) => {
        // console.log(`Hi ${friend1} ${friend2} ${friend3}`);
    
        friends.forEach((friend: string) => console.log(`Hi ${friend}`));
      };
    
      greetFriends("Abul", "kabul", "babul", "ubul", "labul");
    }

