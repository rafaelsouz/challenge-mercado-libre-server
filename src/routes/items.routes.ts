import { Router } from 'express';

const itemsRouter = Router();

itemsRouter.get('/', async (req, res) => {
  const { q: query } = req.query;

  return res.json({
    query
  });
});

itemsRouter.get('/:id', async (req, res) => {
  const { id } = req.params;

  return res.json({
    id
  });
});

export { itemsRouter };
