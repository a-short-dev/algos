import axios from 'axios';

export async function createTransaction() {
  try {
    const ctx = axios.post('api/transactions', {
      userId: 1,
      amount: 5000,
    });
  } catch (error) {}
}
