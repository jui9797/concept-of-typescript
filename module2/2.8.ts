{
  // asyncronus typescript
  // basic promise concept

  // simulate
  // const createPromise =() : Promise<string> => {
  //     return new Promise<string>((resolve, reject) => {
  //         const data : string = 'something'
  //         if(data){
  //             resolve(data)
  //         }
  //         else{
  //             reject('fail to load data')
  //         }

  //     })
  // }

  type Apple = { something: string };
  type Something = { something: string }; // aikhne string er jaygay something type use kora hoise

  const createPromise = (): Promise<Apple> => {
    //aikhne string er jaygay something type use kora hoise
    return new Promise<Apple>((resolve, reject) => {
      // aikhne string er jaygay something type use kora hoise
      const data: Apple = { something: "something" }; // aikhne string er jaygay something type use kora hoise
      if (data) {
        resolve(data);
      } else {
        reject("fail to load data");
      }
    });
  };

  const showData = async (): Promise<Something> => {
    const data: Something = await createPromise();
    console.log(data); // output : { something: 'something' }
    return data;
  };

  // calling create function
  // const showData =async() : Promise <string> =>{
  // const data : string = await createPromise();
  // console.log(data)
  // return data
  // }
  //ts-node-dev --respawn --transpile-only .\module2\2.8.ts  terminal a run korle (something) dekhabe

  showData();

  type Todo = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  };

  const getTodo = async (): Promise<Todo> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    const data = await response.json();
    console.log(data);
    return data;
  };

  getTodo(); // ts-node-dev --respawn --transpile-only .\module2\2.8.ts  terminal a run korle (something) dekhabe
  //output : { id: 1, userId: 1, title: 'delectus aut autem', completed: false }
}
