import { Router } from 'express';

const otherRouter = Router();

function encryptEnv(): string {
  const cipherText = {}
  return cipherText.toString();
}

// routes
function getRoute(req, res) {
  res.json({ status: 'completed' });
}

otherRouter.get('/test', getRoute);

export { otherRouter };
