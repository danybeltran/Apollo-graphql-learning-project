const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const { Query, Mutation } = require("./resolvers/index");

/*
# Mock data
In the queryies and mutations files,
"user" is an object containing methods for
mapping mock users in an array, add new
ones, get one and update one's information.
This is replacing the real data.
*/

/*******************/

// Create graphql types

var typeDefs = gql`
  type User {
    id: Int
    name: String
    email: String
  }

  input UserUpdate {
    name: String
    email: String
  }

  type Query {
    getAll: [User]
    getOne(id:Int): User
  }

  type HttpResponse {
    status: Int
    message: String
  }

  type Mutation {
    addOne(data: UserUpdate): HttpResponse
    deleteOne(id:Int): HttpResponse
    updateOne(id:Int, data: UserUpdate): HttpResponse
  }

`;

var resolvers = {
  Query,
  Mutation
};

var server = new ApolloServer({ typeDefs, resolvers, introspection: true });

var app = express();

server.applyMiddleware({ app, disableHealthCheck: true });

app.listen({ port: 8080 }, () => {
  console.log("Go to http://localhost:8080" + server.graphqlPath);
});
