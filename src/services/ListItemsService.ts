import { api } from '../api';
import { AppError } from '../errors/AppError';
import { Announcements } from './types';

class ListItemsService {
  public async execute(search: string): Promise<Announcements> {
    try {
      const { data } = await api.get<Announcements>(
        `sites/MLA/search?q=${search}`
      );

      return data;
    } catch (err) {
      throw new AppError(err.response.data.message, err.response.data.status);
    }
  }
}

export { ListItemsService };
