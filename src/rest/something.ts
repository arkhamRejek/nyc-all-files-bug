import { Router } from 'express';
import { messageQueueManager } from '../middleware/mqm';

const someRouter = Router();

/// routes
function getRoute(req, res) {
  res.json({ verification: req.headers['x-okta-verification-challenge'] });
}

async function postRoute(req, res) {
  try {
    if (req.body.data.events[0].outcome.result === 'SUCCESS') {
      let email: string,
        userId = '';

      if (req.body.data.events[0].eventType === 'okey.okye') {

        const publishMsg = {
          channel: 'aweoms',
          message: {
            email,
            userId,
          },
        };
        await messageQueueManager.pubsub.publish(publishMsg);
      } else if (
        req.body.data.events[0].eventType === 'user.lifecycle.create'
      ) {
        email = req.body.data.events[0].target[0].alternateId;
        userId = req.body.data.events[0].target[0].id;

        const publishMsg = {
          channel: 'userCreate',
          message: {
            email,
            userId,
          },
        };
        await messageQueueManager.pubsub.publish(publishMsg);
      }

      try {

        const update = await messageQueueManager.pubsub.publish({
          id: undefined,
          userId,
        });

        res.json({
          status: 200,
          message: update,
        });
      } catch (e) {
        res.json({
          status: 400,
          message: e.message,
        });
      }
    }
  } catch (e) {
    res.json({
      status: 401,
      message: 'NotAuthorized',
    });
  }
}

/// leave in place this is used for okta to validate whatever url the api is deployed on for event hooks
someRouter.get('/', getRoute);
/// handles the okta hooks
someRouter.post('/', postRoute);

export { someRouter };
