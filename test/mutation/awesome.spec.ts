import {
  sandbox,
  expect
} from '@test-helper';
import { awesomeMutations } from '@/mutations/awesome';

describe('Milestone Mutations', () => {
  afterEach(() => {
    sandbox.restore();
  });

  it('Create a Milestone', async () => {
    awesomeMutations
    expect(true).to.eq(true);
  });
});
