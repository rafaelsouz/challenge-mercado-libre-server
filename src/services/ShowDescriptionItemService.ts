import { api } from '../api';
import { DescriptionAnnouncement } from './types';

class ListItemsService {
  public async execute(id: string): Promise<DescriptionAnnouncement> {
    let item: ResponseAPI;

    await api
      .get<ResponseAPI>(`items/${id}/description`)
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
