{
  // access modifiers

  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    public addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

    private getBalance() {
      return this._balance;
    }

    public getHiddenMethod() {
      return this.getBalance();
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      // protected property _balance subclass
      console.log("Balance from subclass:", this._balance); //100
    }
  }

  // new account
  const goribManusherAccount = new BankAccount(111, "Mr. gorib", 20);

  // deposit
  goribManusherAccount.addDeposit(20);

  // private method
  // const myBalance = goribManusherAccount.getBalance();

  //  public method
  const myBalance = goribManusherAccount.getHiddenMethod();
  console.log("my balance", myBalance); //40

  // StudentAccount
  const studentAcc = new StudentAccount(222, "Student", 100);
  studentAcc.test();
}
