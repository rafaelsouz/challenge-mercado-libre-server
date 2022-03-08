import { api } from '../api';
import { DetailsAnnouncement } from './types';

class ListItemsService {
  public async execute(id: string): Promise<DetailsAnnouncement> {
    let item: ResponseAPI;

    await api
      .get<ResponseAPI>(`items/${id}`)
      .then((res) => {
        item = res.data;
      })
      .catch((error) => {
        return error;
      });

    return item;
  }
}

export { ListItemsService };
