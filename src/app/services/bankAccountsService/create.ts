import { httpClient } from "../httpClient";

export interface BankAccountParams {
  name: string;
  initialBalance: number;
  color: string;
  type: 'CHECKING' | 'INVESTMENT' | 'CASH';
}

export async function craete(params: BankAccountParams) {
  const { data } = await httpClient.post('/bank-accounts', params);

  return data;
}
