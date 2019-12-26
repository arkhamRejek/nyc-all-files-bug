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
const apollo_server_express_1 = require("apollo-server-express");
const express = require("express");
const type_1 = require("graphql/type");
const queries_1 = require("./queries");
const mutations_1 = require("./mutations");
const rest_1 = require("./rest");
const context_1 = require("./context");
const query = new type_1.GraphQLObjectType({
    name: 'query',
    fields: () => (Object.assign({}, queries_1.aweomeQ)),
});
const mutation = new type_1.GraphQLObjectType({
    name: 'RootMutation',
    fields: () => (Object.assign({}, mutations_1.awesomeMutations)),
});
const schema = new type_1.GraphQLSchema({
    query,
    mutation,
});
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const server = new apollo_server_express_1.ApolloServer({
            schema,
            context: ({ req }) => __awaiter(this, void 0, void 0, function* () {
                return context_1.ContextFactory.createContext(req);
            }),
        });
        const app = express();
        server.applyMiddleware({ app });
        app.use('/rest', rest_1.routes);
        app.listen({ port: process.env.PORT || 8000 }, () => console.log(`Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`));
    });
}
startServer();
