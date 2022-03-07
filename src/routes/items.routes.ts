import { Router } from 'express';

import { ItemController } from '../controller/ItemsController';

const itemsRouter = Router();

const itemsController = new ItemController();

itemsRouter.get('/', itemsController.index);

itemsRouter.get('/:id', async (req, res) => {
  const { id } = req.params;

  return res.json({
    id
  });
});

export { itemsRouter };
