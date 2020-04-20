import { GraphQLObjectType, GraphQLString } from 'graphql';

export const UserGraphQLType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    gender: { type: GraphQLString },
    last_login_time: { type: GraphQLString },
  })
});