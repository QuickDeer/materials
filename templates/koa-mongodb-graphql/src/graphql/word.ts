import { GraphQLObjectType, GraphQLString } from 'graphql';

export const WordGraphQLType = new GraphQLObjectType({
  name: 'Word',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    reporter: { type: GraphQLString },
    translator: { type: GraphQLString },
  })
});