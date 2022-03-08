import { api } from '../api';
import { AppError } from '../errors/AppError';
import { DetailsAnnouncement } from './types';

class ShowItemService {
  public async execute(id: string): Promise<DetailsAnnouncement> {
    try {
      const { data } = await api.get<DetailsAnnouncement>(`items/${id}`);

      return data;
    } catch (err) {
      throw new AppError(err.response.data.message, err.response.data.status);
      // throw new Error(err.response.data.message);
    }
  }
}

export { ShowItemService };
