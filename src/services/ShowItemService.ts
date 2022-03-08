import { api } from '../api';
import { DetailsAnnouncement } from './types';

class ShowItemService {
  public async execute(id: string): Promise<DetailsAnnouncement> {
    let item: DetailsAnnouncement;

    await api
      .get<DetailsAnnouncement>(`items/${id}`)
      .then((res) => {
        item = res.data;
      })
      .catch((error) => {
        return error;
      });

    return item;
  }
}

export { ShowItemService };
