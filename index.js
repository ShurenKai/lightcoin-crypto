class Account {

  constructor(username) {
    this.username = username;
    this.balance = 0;
    this.count = 0;
    this.date = [];
    this.transactions = [];
  }
}

class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    if (!this.isAllowed()) return false;
    this.account.balance += this.value;
    this.account.count += 1;
    this.account.date.push(new Date());
    this.account.transactions.push(this.account.balance);
  }
}

class Deposit extends Transaction {

  get value() {
    return this.amount;
  }

  isAllowed(){
    return true
  }
}

class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }

  isAllowed(){
    return (this.account.balance - this.amount >= 0)
  }

}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account('chasing-cars');
console.log(myAccount);

console.log('Starting Balance:', myAccount.balance);

const t1 = new Deposit(120.00, myAccount);
t1.commit();

const t2 = new Withdrawal(50.00, myAccount);
t2.commit();

const t3 = new Withdrawal(100, myAccount);
t3.commit()

console.log('Ending Balance:', myAccount.balance);
console.log(myAccount.count);
console.log(myAccount.transactions);
console.log(myAccount.date)