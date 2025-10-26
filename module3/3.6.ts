{
  // getter and setter methods

  class BankAccount {
    public readonly id: number;
    public name: string;
    private _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    //setter method
    set deposit(amount: number) {
      this._balance = this.balance + amount;
    }

    //getter method
    get balance() {
      return this._balance;
    }
  }

  const goribManuserAccount = new BankAccount(111, "Me;gorib", 20);

  goribManuserAccount.deposit = 50;
  const myBalance = goribManuserAccount.balance; // get balance function aikhne property er mto kore pawa jacce
  console.log(myBalance); //20

  //
}
