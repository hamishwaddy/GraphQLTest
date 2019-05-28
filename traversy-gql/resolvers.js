const Sequelize = require('sequelize');
const { Players, Teams, Users } = require('./dbConnectors');

// RESOLVER MAP
const resolvers = {
    Query: {
        getAllPlayers: () => {
            return Players.findAll();
        },
        getOnePlayer: (root, { id }) => {
            return new Promise((resolve, object) => {
                Players.findById(id, (err, player) => {
                    if (err) reject(err);
                    else resolve(player);
                });
            });
        },
        getAllTeams: () => {
            return Teams.findAll();
        },
        getOneTeam: (root, { id }) => {
            return new Promise((resolve, object) => {
                Teams.findById(id, (err, team) => {
                    if (err) reject(err);
                    else resolve(team);
                });
            });
        },
        getAllUsers: () => {
            return Users.findAll();
        },
        getOneUser: (root, { id }) => {
            return new Promise((resolve, object) => {
                Users.findById(id, (err, user) => {
                    if (err) reject(err);
                    else resolve(user);
                });
            });
        },
    },

    Mutation: {
        createPlayer: (root, { input }) => {
            const newPlayer = new Players({
                name: input.name,
                team: input.teams,
            });
             
            newPlayer.id = newPlayer._id;

            return new Promise((resolve, object) => {
                newPlayer.save((err) => {
                    if(err) reject(err);
                    else resolve(newPlayer);
                });
            });
        },

        createTeam: (root, { input }) => {
            const newTeam = new Teams({
                name: input.name,
                pool: input.pool,
            });
             
            newTeam.id = newTeam._id;

            return new Promise((resolve, object) => {
                newTeam.save((err) => {
                    if(err) reject(err);
                    else resolve(newTeam);
                });
            });
        },
        createUser: (root, { input }) => {
            const newUser = new Users({
                name: input.name,
                email: input.email,
            });
             
            newUser.id = newUser._id;

            return new Promise((resolve, object) => {
                newUser.save((err) => {
                    if(err) reject(err);
                    else resolve(newUser);
                });
            });
        },
    },
};

// export default resolvers;
module.exports = resolvers;