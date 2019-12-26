import { Router } from 'express';

import { someRouter } from './something';
import { otherRouter } from './ops';

const routes = Router();

routes.use('/ok', someRouter);

export { routes };
