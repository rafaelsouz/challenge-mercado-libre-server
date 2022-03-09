import { Router } from 'express';

import { itemsRouter } from './items.routes';

const routes = Router();

routes.use('/api/items', itemsRouter);

export default routes;
