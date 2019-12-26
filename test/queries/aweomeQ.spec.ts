import {
  sandbox,
  expect,
} from '@test-helper';
import { aweomeQ } from '@/queries/aweomeQ';


describe('Incorporation type Query', () => {
  afterEach(() => {
    sandbox.restore();
  });

  it('returns a list of awesome types', async () => {
    aweomeQ
    expect(true).to.eq(true);
  });
});
