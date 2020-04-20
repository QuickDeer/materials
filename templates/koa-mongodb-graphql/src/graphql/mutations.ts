import { GraphQLObjectType, GraphQLString }  from 'graphql';
import { ProjectGraphQLType } from './project';
import ProjectSchema from '../models/project';

export const Mutations = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    // Add new Project
    addProject: {
      type: ProjectGraphQLType,
      args: {
        name: { type: GraphQLString },
        reporter: { type: GraphQLString },
        translator: { type: GraphQLString },
      },
      resolve(parent, args) {
        const newProject = new ProjectSchema({
          name: args.name,
          reporter: args.reporter,
          translator: args.translator
        })

        return newProject.save();
      }
    },

    // Edit Project

    // Delete Project
  }
});
