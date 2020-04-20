import { GraphQLObjectType, GraphQLString } from 'graphql';

export const LanguageGraphQLType = new GraphQLObjectType({
  name: 'Language',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    reporter: { type: GraphQLString },
    translator: { type: GraphQLString },
  })
});