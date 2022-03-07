import { Request, Response } from 'express';

import { ListItemsService } from '../services/ListItemsService';

class ItemController {
  async index(req: Request, res: Response): Promise<Response> {
    const listItems = new ListItemsService();

    const search = String(req.query.q);

    const announcements = await listItems.execute(search);

    // const [name, lastname] = announcements.results.;

    const announcementsFormatted = {
      author: {
        name: announcements
      }
    };

    return res.json(announcements);
  }

  // async show(req: Request, res: Response): Promise<Response> {}
}

export { ItemController };
