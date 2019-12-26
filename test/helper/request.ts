import { random, internet } from 'faker';

export const context = {
  _profile: {
    id: random.number(),
  },
  profile: {
    id: random.number(),
  },

  request: {
    connection: {
      remoteAddress: internet.ip(),
    },
    headers: {
      'x-forwarded-for': [internet.ip(), internet.ip()],
    },
  },
};
