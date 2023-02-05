import { api } from '../instance';

export const Service = {
  async getAll() {
    return api.get('/');
  }
};
