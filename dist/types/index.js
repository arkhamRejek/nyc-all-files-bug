"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
exports.input = new graphql_1.GraphQLInputObjectType({
    name: 'Input',
    fields: {
        contractId: { type: graphql_1.GraphQLID },
        bankAccountId: { type: graphql_1.GraphQLID },
    },
});
