console.log('Задание 7');

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const id = `${this.transactions.length + 1}_id`;
    return { id, type, amount };
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    console.log(`Внесено: ${amount}. Баланс: ${this.balance}`);
    const add = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(add);
    console.log('История транзакций: ', this.transactions);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      console.log(
        `Снятие суммы ${amount} невозможно. На счету недостаточно средств.`,
      );
    } else {
      this.transactions.push(
        this.createTransaction(amount, Transaction.WITHDRAW),
      );
      console.log(this.transactions);

      this.balance -= amount;
      console.log(
        `Снимаемая сумма: ${amount}. Остаток на счете: ${this.balance}`,
      );
    }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return `Текущий баланс: ${this.balance}`;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
    return `Транзакция ${id} не найдена.`;
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let totalBalance = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        totalBalance += transaction.amount;
      }
    }

    if (type === 'deposit') {
      return `На счет внесено всего: ${totalBalance}.`;
    } else if (type === 'withdraw') {
      return `Снято всего: ${totalBalance}.`;
    }
  },
};

console.log(account.createTransaction(5, 'deposit'));
console.log(account.createTransaction(10, 'deposit'));
account.deposit(15);
account.deposit(20);
account.withdraw(5);
account.withdraw(5);
account.withdraw(45);
console.log(account.getBalance());
console.log(account.getTransactionDetails('3_id'));
console.log(account.getTransactionDetails('5_id'));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
