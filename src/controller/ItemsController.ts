import { Request, Response } from 'express';

import { ListItemsService } from '../services/ListItemsService';
import { separatorAmountDecimals } from '../utils/separatorAmountDecimals';

class ItemController {
  async index(req: Request, res: Response): Promise<Response> {
    const listItems = new ListItemsService();

    const search = String(req.query.q);

    const announcements = await listItems.execute(search);

    const { values } = announcements.filters.find(
      (filter) => filter.id === 'category'
    );

    const categories = values
      .map(({ path_from_root }) => {
        return path_from_root.map((path) => path.name);
      })
      .flat();

    const announcementsFiltered = announcements.results.filter(
      (_, index) => index < 4
    );

    const announcementItemsFormatted = announcementsFiltered.map(
      (announcement) => {
        const [amount, decimals] = separatorAmountDecimals(announcement.price);

        return {
          id: announcement.id,
          title: announcement.title,
          price: {
            currency: announcement.currency_id,
            amount,
            decimals: decimals || ''
          },
          picture: announcement.thumbnail,
          condition: announcement.condition,
          free_shipping: announcement.shipping.free_shipping
        };
      }
    );

    const announcementsFormatted = {
      author: {
        name: 'Rafael',
        lastname: 'Souza'
      },
      categories,
      items: announcementItemsFormatted
    };

    return res.json(announcementsFormatted);
  }

  async show(req: Request, res: Response): Promise<Response> {}
}

export { ItemController };
