import { api } from '../api';
import { DescriptionAnnouncement } from './types';

class ShowDescriptionItemService {
  public async execute(id: string): Promise<DescriptionAnnouncement> {
    let item: DescriptionAnnouncement;

    await api
      .get<DescriptionAnnouncement>(`items/${id}/description`)
      .then((res) => {
        item = res.data;
      })
      .catch((error) => {
        return error;
      });

    return item;
  }
}

export { ShowDescriptionItemService };
