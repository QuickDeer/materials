import { GraphQLObjectType, GraphQLString } from 'graphql';

export const ProjectGraphQLType = new GraphQLObjectType({
  name: 'Project',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    reporter: { type: GraphQLString },
    transloator: { type: GraphQLString },
  })
});