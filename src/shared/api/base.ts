import { BASE_URL } from '@/shared/config';

export class StarDBClient {
  async get(endpoint: string) {
    return await fetch(`${BASE_URL}${endpoint}`);
  }
}
