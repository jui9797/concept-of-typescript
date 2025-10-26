{
  //acess modifiers: public, private, protected, readonly
  class BankAccount {
    public readonly id: number;
    public name: string;
    private _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }
    //adding new amount with balance using this function
    public addDeposit(amount: number) {
      this._balance += amount;
    }
    //get balance using this function
    public getBalance() {
      return this._balance;
    }
  }

  const goribManuserAccount = new BankAccount(111, "Me;gorib", 200);
  goribManuserAccount.addDeposit(20);
  const myBalance = goribManuserAccount.getBalance();
  console.log(myBalance); //220
}
