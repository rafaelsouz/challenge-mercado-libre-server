import { api } from '../api';

type Announcement = {
  id: string;
  title: string;
  price: number;
  currency_id: string;
  thumbnail: string;
  condition: string;
  shipping: {
    free_shipping: boolean;
  };
  seller: {
    eshop: {
      nick_name: string;
    };
  };
};

type Filters = {
  id: string;
  name: string;
  type: string;
  values: [
    {
      id: string;
      name: string;
      path_from_root: [
        {
          id: string;
          name: string;
        }
      ];
    }
  ];
};

type ResponseAPI = {
  filters: Filters[];
  results: Announcement[];
};

class ListItemsService {
  public async execute(search: string): Promise<ResponseAPI> {
    let announcements: ResponseAPI;

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
