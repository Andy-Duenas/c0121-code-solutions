/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

var accountProto = {
  deposit: function (amount) {
    if (amount > 0) {
      var newTransaction = new Transaction('deposit', amount);
      this.transactions.push(newTransaction);
      return true;
    }
    return false;
  },
  withdraw: function (amount) {
    if (amount > 0) {
      var newTransaction = new Transaction('withdraw', amount);
      this.transactions.push(newTransaction);
      return true;
    }
    return false;
  },
  getBalance: function () {
    var total = 0;
    if (this.transactions.length !== 0) {
      for (var i = 0; i < this.transactions.length; i++) {
        if (this.transactions[i].type === 'withdraw') {
          total -= this.transactions[i].amount;
        }
        if (this.transactions[i].type === 'deposit') {
          total += this.transactions[i].amount;
        }
      }
    } else {
      return 0;
    }
    return total;
  }
};

Account.prototype = accountProto;
