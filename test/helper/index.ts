import { SinonStub } from 'sinon';
import gql from 'graphql-tag';


import * as sinonChai from 'sinon-chai';
import * as chai from 'chai';

chai.use(sinonChai);
chai.should();

const expect = chai.expect;

export { context } from './request';
export { sandbox } from './sinon';

export { SinonStub, expect, gql};
export { random, name, internet } from 'faker';
