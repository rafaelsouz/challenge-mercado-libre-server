import { api } from '../api';
import { Announcements } from './types';

class ListItemsService {
  public async execute(search: string): Promise<Announcements> {
    let announcements: Announcements;

    await api
      .get<Announcements>(`sites/MLA/search?q=${search}`)
      .then((res) => {
        announcements = res.data;
      })
      .catch((error) => {
        return error;
      });

    return announcements;
  }
}

export { ListItemsService };
