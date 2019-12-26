import { GraphQLList, GraphQLString } from 'graphql/type';


export const aweomeQ = {
  incorporationTypes: {
    type: new GraphQLList(GraphQLString),
    resolve: async () => {
      return [1]
    },
  },
};
