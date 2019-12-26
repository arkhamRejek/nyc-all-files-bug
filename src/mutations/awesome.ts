import {
  GraphQLFieldConfigMap,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql/type';

// tslint:disable-next-line: no-any
export const awesomeMutations: GraphQLFieldConfigMap<any, any> = {

  deleteAwesome: {
    type: GraphQLString,
    args: { id: { type: new GraphQLNonNull(GraphQLString) } },
    resolve: async (_root, { id }) => {
      return {
        status: 200,
        message: 'milestone deleted ',
      };
    },
  },
};
