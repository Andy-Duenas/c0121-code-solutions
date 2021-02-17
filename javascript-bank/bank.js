/* exported Bank */

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

var bankProto = {
  openAccount: function (holder, balance) {
    if (balance > 0) {
      var newAccount = new Account(this.nextAccountNumber, holder);
      newAccount.deposit(balance);
      this.accounts.push(newAccount);
      this.nextAccountNumber++;
      return newAccount.number;
    }
    return null;
  },
  getAccount: function (number) {
    for (var i = 0; i < this.accounts.length; i++) {
      if (this.accounts[i].number === number) { return this.accounts[i]; }
    }
    return null;
  },
  getTotalAssets() {
    var total = 0;
    if (this.accounts.length !== 0) {
      for (var i = 0; i < this.accounts.length; i++) {
        total += this.accounts[i].getBalance();
      }
      return total;
    }
    return 0;
  }
};

Bank.prototype = bankProto;
