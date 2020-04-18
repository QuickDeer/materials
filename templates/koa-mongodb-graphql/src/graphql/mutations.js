import { GraphQLObjectType, GraphQLObjectType }  from 'graphql';
import { ProjectGraphQLType } from './project';
import ProjectSchema from '../models/project';

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {

  }
})

module.exports = Mutation;