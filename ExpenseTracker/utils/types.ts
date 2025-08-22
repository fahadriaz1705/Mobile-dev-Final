export interface Transaction {
  id: string;
  type: 'expense' | 'income';
  amount: number;
  category: string;
  note?: string;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  uid: string;
  email: string | null;
}

export type TransactionCategory =
  | 'food'
  | 'travel'
  | 'bills'
  | 'shopping'
  | 'salary'
  | 'other';
