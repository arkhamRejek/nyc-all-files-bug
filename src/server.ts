
import { ApolloServer } from 'apollo-server-express';
import * as express from 'express';

import { GraphQLObjectType, GraphQLSchema } from 'graphql/type';
import {aweomeQ} from './queries'
import {awesomeMutations} from './mutations'
import { routes } from './rest';
import { ContextFactory } from './context';


const query: GraphQLObjectType = new GraphQLObjectType({
    name: 'query',
    fields: () => ({
      ...aweomeQ
    }),
  });
  
  const mutation: GraphQLObjectType = new GraphQLObjectType({
    name: 'RootMutation',
    fields: () => ({
      ...awesomeMutations,
    }),
  });
  
  const schema: GraphQLSchema = new GraphQLSchema({
    query,
    mutation,
  });
  


  async function startServer() {  
  
    const server = new ApolloServer({
      schema,
      context: async ({ req }) => {
        return ContextFactory.createContext(req);
      },
    });
  
    const app = express();
  
  
    server.applyMiddleware({ app });
  
    app.use('/rest', routes);
  
    app.listen({ port: process.env.PORT || 8000 }, () =>
      console.log(
        `Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`
      )
    );
  }

  
  startServer();
  