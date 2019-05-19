import { resolvers } from './resolvers';
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
    type Player {
        id: ID
        name: String
        gender: Gender
        age: Int
        team: TeamCode
    }

    type Team {
        id: ID
        teamCode: TeamCode
        name: String
        gender: Gender
        coach: String
    }

    enum Gender {
        MALE
        FEMALE
    }

    enum TeamCode {
        WAIM
        AUKM
        TASM
        COUM
        WBHM
        MANM
        NHBM
    }

    type Query {
        getPlayer(id: ID): Player
        getTeam(teamCode: TeamCode): Team
    }

    input PlayerInput {
        id: ID
        name: String
        gender: Gender
        age: Int
        team: TeamCode
    }

    input TeamInput {
        id: ID
        teamCode: TeamCode
        name: String
        gender: Gender
        coach: String
    }

    type Mutation {
        createPlayer(input: PlayerInput): Player
        updatePlayer(input: PlayerInput): Player
        deletePlayer(id: ID!): String
        createTeam(input: TeamInput): Team
        updateTeam(input: TeamInput): Team
        deleteTeam(id: ID!): String
    }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers});

export { schema };
