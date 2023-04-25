import { Customer } from './customer';

export interface Opportunity {
  id: number;
  topic: string;
  budget: string;
  status: number;
  customer: Customer;
}

export interface Activity {
  id: number;
  type: number;
  schedule: Date;
  createdBy: string;
  summary: string;
}

// Интерфейс Opportunity определяет, как мы будем получать информацию о
// возможностях из бэкенда.
