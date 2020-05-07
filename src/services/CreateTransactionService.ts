/**
 * Project: Go Stack NodeJs and TypeScript Challenge
 * Author: Marcos Santos
 * Date: May, 2, 2020.
 * Description: This project aims to show the concepts
 * and techniques presented and learned during the the
 * NodeJs and TypeScript training.
 * https://github.com/maasantos10/gostack-concept-typescript-nodejs
 */

import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface RequestDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, value, type }: RequestDTO): Transaction {
    const { total } = this.transactionsRepository.getBalance();

    if (!['income', 'outcome'].includes(type)) {
      throw new Error('[Node.JS/TypeScript Challenge] Invalid transaction');
    }

    if (type === 'outcome' && total < value) {
      throw new Error('[Node.JS/TypeScript Challenge] insufficient balance!');
    }

    const transaction = this.transactionsRepository.create({
      title,
      value,
      type,
    });
    return transaction;
  }
}
export default CreateTransactionService;
