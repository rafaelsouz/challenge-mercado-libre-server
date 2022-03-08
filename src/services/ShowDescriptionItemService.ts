import { api } from '../api';
import { AppError } from '../errors/AppError';
import { DescriptionAnnouncement } from './types';

class ShowDescriptionItemService {
  public async execute(id: string): Promise<DescriptionAnnouncement> {
    try {
      const { data } = await api.get<DescriptionAnnouncement>(
        `items/${id}/description`
      );

      console.log(data);

      return data;
    } catch (err) {
      throw new AppError(err.response.data.message, err.response.data.status);
    }
  }
}

export { ShowDescriptionItemService };
