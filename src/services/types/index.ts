export type Announcement = {
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

export type Filters = {
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

export type Announcements = {
  filters: Filters[];
  results: Announcement[];
};

export type DescriptionAnnouncement = {
  plain_text: string;
};

export type DetailsAnnouncement = {
  sold_quantity: number;
} & Announcement;
