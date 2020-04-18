import { GraphQLObjectType, GraphQLString, GraphQLSchema } from 'graphql';
import { ProjectGraphQLType } from './project';
import ProjectSchema from '../models/project';

export const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    project: {
      type: ProjectGraphQLType,
      args: {
        id: { type: GraphQLString }
      },
      resolve(parent: any, args: any) {
        return ProjectSchema.findById(args.id);
      }
    }
  }
});

export default new GraphQLSchema({
  query: RootQuery
});
