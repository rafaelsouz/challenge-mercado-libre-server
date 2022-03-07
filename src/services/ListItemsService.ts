import { api } from '../api';

type Announcements = {
  seller: {
    eshop: {
      nick_name: string;
    };
  };
};

type ResponseAPI = {
  results: Announcements[];
};

class ListItemsService {
  public async execute(search: string): Promise<ResponseAPI[]> {
    let announcements;

    await api
      .get<ResponseAPI>(`sites/MLA/search?q=${search}`)
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
