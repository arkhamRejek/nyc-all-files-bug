"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mqm_1 = require("../middleware/mqm");
const someRouter = express_1.Router();
exports.someRouter = someRouter;
function getRoute(req, res) {
    res.json({ verification: req.headers['x-okta-verification-challenge'] });
}
function postRoute(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (req.body.data.events[0].outcome.result === 'SUCCESS') {
                let email, userId = '';
                if (req.body.data.events[0].eventType === 'okey.okye') {
                    const publishMsg = {
                        channel: 'aweoms',
                        message: {
                            email,
                            userId,
                        },
                    };
                    yield mqm_1.messageQueueManager.pubsub.publish(publishMsg);
                }
                else if (req.body.data.events[0].eventType === 'user.lifecycle.create') {
                    email = req.body.data.events[0].target[0].alternateId;
                    userId = req.body.data.events[0].target[0].id;
                    const publishMsg = {
                        channel: 'userCreate',
                        message: {
                            email,
                            userId,
                        },
                    };
                    yield mqm_1.messageQueueManager.pubsub.publish(publishMsg);
                }
                try {
                    const update = yield mqm_1.messageQueueManager.pubsub.publish({
                        id: undefined,
                        userId,
                    });
                    res.json({
                        status: 200,
                        message: update,
                    });
                }
                catch (e) {
                    res.json({
                        status: 400,
                        message: e.message,
                    });
                }
            }
        }
        catch (e) {
            res.json({
                status: 401,
                message: 'NotAuthorized',
            });
        }
    });
}
someRouter.get('/', getRoute);
someRouter.post('/', postRoute);
