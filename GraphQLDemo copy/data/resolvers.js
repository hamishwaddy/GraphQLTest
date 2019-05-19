import mongoose from 'mongoose';
import { Players, Teams } from './dbConnectors';

// resolver map
export const resolvers = {
    Query: {
        getPlayer: ({ id }) => {
            return new Player(id, playerDatabase[id]);
        },
    },
    Mutation: {
        createPlayer: (root, { input }) => {
            const newPlayer = new Players({
                name: input.name,
                gender: input.gender,
                age: input.age,
                team: input.team,
            });

            newPlayer.id = newPlayer._id;

            return new Promise((resolve, object) => {
                newPlayer.save((err) => {
                    if (err) reject(err);
                    else resolve(newPlayer);
                });
            });
        },
        updatePlayer: (root, { input }) => {
            return new Promise(( resolve, object) => {
                Players.findOneAndUpdate({ _id: input.id }, input, { new: true}, (err, player) => {
                    if (err) reject(err);
                    else resolve(player);
                });
            });
        },
        deletePlayer: (root, { id }) => {
            return new Promise ((resolve, object) => {
                Players.remove({ _id: id}, (err) => {
                    if (err) reject(err);
                    else resolve("Successfully deleted player");
                });
            });
        },

        createTeam: (root, { input }) => {
            const newTeam = new Teams({
                teamCode: input.teamCode,
                name: input.name,
                gender: input.gender,
                coach: input.coach,
            });

            newTeam.id = newTeam._id;

            return new Promise((resolve, object) => {
                newTeam.save((err) => {
                    if (err) reject(err);
                    else resolve(newTeam);
                });
            });
        },
        
        updateTeam: (root, { input }) => {
            return new Promise(( resolve, object) => {
                Teams.findOneAndUpdate({ _id: input.id }, input, { new: true}, (err, team) => {
                    if (err) reject(err);
                    else resolve(team);
                });
            });
        },
        deleteTeam: (root, { id }) => {
            return new Promise ((resolve, object) => {
                Teams.remove({ _id: id}, (err) => {
                    if (err) reject(err);
                    else resolve("Successfully deleted team");
                });
            });
        }   
    },
};