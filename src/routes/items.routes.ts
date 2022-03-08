import { Router } from 'express';

import { ItemController } from '../controller/ItemsController';

const itemsRouter = Router();

const itemsController = new ItemController();

itemsRouter.get('/', itemsController.index);

itemsRouter.get('/:id', itemsController.show);

export { itemsRouter };
