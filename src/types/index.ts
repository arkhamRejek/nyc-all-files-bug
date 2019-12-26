import { GraphQLID, GraphQLInputObjectType } from 'graphql';

export const input: GraphQLInputObjectType = new GraphQLInputObjectType(
  {
    name: 'Input',
    fields: {
      contractId: { type: GraphQLID },
      bankAccountId: { type: GraphQLID },
    },
  }
);
