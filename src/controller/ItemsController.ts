import { Request, Response } from 'express';

import { AnnouncementResource } from '../resources/AnnouncementResource';
import { DetailsAnnouncementResource } from '../resources/DetailsAnnouncementResource';
import { ListItemsService } from '../services/ListItemsService';
import { ShowDescriptionItemService } from '../services/ShowDescriptionItemService';
import { ShowItemService } from '../services/ShowItemService';

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
        return new AnnouncementResource(announcement).parse();
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

  async show(req: Request, res: Response): Promise<Response> {
    const showItem = new ShowItemService();
    const showDescriptionItem = new ShowDescriptionItemService();

    const { id } = req.params;

    const [detailsItem, descriptionItem] = await Promise.all([
      showItem.execute(id),
      showDescriptionItem.execute(id)
    ]);

    const itemComplete = {
      ...detailsItem,
      description: descriptionItem.plain_text
    };

    const detailsItemFormatted = new DetailsAnnouncementResource(
      itemComplete
    ).parse();

    return res.json(detailsItemFormatted);
  }
}

export { ItemController };
