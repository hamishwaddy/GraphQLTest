const Sequelize = require('sequelize');
const { resolvers } = require ('./resolvers');
const { makeExecutableSchema } = require ('graphql-tools');


const typeDefs = `
    type Player {
        id: ID!
        name: String!
        age: Int!
        gender: Gender!
        team: String!
    }
    type Team {
        id: ID!
        name: String!
        pool: String!
        gender: Gender!
        players: [Player]!
    }
    type User {
        uid: ID!
        name: String!
        email: String!
    }
    enum Gender {
        MALE
        FEMALE
    }

    type Query {
        getOnePlayer(id: ID!): Player
        getPlayers: [Player]
        getOneTeam(id: ID!): Team
        getTeams: [Team]
    }

    input PlayerInput {
        id: ID!
        name: String!
        age: Int!
        gender: Gender!
        team: String!
    }
    input TeamInput {
        id: ID!
        name: String!
        pool: String!
        gender: Gender!
        players: [PlayerInput]!
    }
    input UserInput {
        uid: ID!
        name: String!
        email: String!
    }

    type Mutation {
        createPlayer(input: PlayerInput): Player
        updatePlayer(input: PlayerInput): Player
        deletePlayer(id: ID!): String
        createTeam(input: TeamInput): Team
        updateTeam(input: TeamInput): Team
        deleteTeam(id: ID!): String
        createUser(input: UserInput): User
        updateUser(input: UserInput): User
        deleteUser(id: ID!): String
    } 
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;


/*
// TRAVERSY'S WAY
const { 
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt, 
    GraphQLList, 
    GraphQLNonNull,
    GraphQLBoolean, 
    GraphQLEnumType, 
    GraphQLSchema 
} = require ('graphql');

// Player Type
const PlayerType = new GraphQLObjectType({
    name: 'Player',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        //age: { type: GraphQLInt },
        team_id: { type: TeamType }
    })
});

// Team Type
const TeamType = new GraphQLObjectType({
    name: 'Team',
    fields: () => ({
        id: { type: GraphQLString},
        pool: { type: GraphQLString },
        name: { type: GraphQLString},
        //coach: { type: GraphQLString},
        //manager: { type: GraphQLString}
    })
});

// Field Type ??? - don't think so - will be a property of GameType???
// Game Type ???


//Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
     fields: {
        players:{
            type: new GraphQLList(PlayerType),
            resolve(parent, args) {
                return Sequelize.find(); 
            },
        },
        player: {
            type: PlayerType,
            args: {
                id: { type: GraphQLString }
            },
            resolve(parent, args) {
                return Sequelize.find();
            },
        }
    }
 });

 const Mutation = new GraphQLObjectType({
     name: 'Mutation',
     fields: {
         addPlayer:{
             type: PlayerType,
             args: {
                name: {type: new GraphQLNonNull(GraphQLString)},
                age: {type: new GraphQLNonNull(GraphQLInt)},
            },
            resolve (parentValue, args) {     // NOT SURE THAT THIS IS RIGHT
                return Sequelize.create({
                    name: args.name,
                    age: args.age,
                })
                .then(res => res.data);
            }
        }
    }

 });
 

module.exports = new GraphQLSchema({ 
     query: RootQuery
});

*/