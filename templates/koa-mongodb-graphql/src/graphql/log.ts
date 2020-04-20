import {
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

export const LogGraphQLType = new GraphQLObjectType({
  name: 'Log',
  fields: () => ({
    id: { type: GraphQLString },
    operator: { type: GraphQLString },
    project_id: { type: GraphQLString },
    language_id: { type: GraphQLString },
    origin_content: { type: GraphQLString },
    new_content: { type: GraphQLString },
    operate_time: { type: GraphQLString },
  })
});