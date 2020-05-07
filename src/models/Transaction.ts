/**
 * Project: Go Stack NodeJs and TypeScript Challenge
 * Author: Marcos Santos
 * Date: May, 2, 2020.
 * Description: This project aims to show the concepts
 * and techniques presented and learned during the the
 * NodeJs and TypeScript training.
 * https://github.com/maasantos10/gostack-concept-typescript-nodejs
 */

import { uuid } from 'uuidv4';

class Transaction {
  id: string;

  title: string;

  value: number;

  type: 'income' | 'outcome';

  constructor({ title, value, type }: Omit<Transaction, 'id'>) {
    this.id = uuid();
    this.title = title;
    this.value = value;
    this.type = type;
  }
}

export default Transaction;
