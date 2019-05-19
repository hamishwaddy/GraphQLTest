import mongoose from 'mongoose';
// import sequelize & mysql2 to create external MySql db

// Mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/players', {
    useMongoClient: true
});

const playerSchema = new mongoose.Schema({
    name: {
        type: String
    },
    gender: {
        type: String
    },
    age: {
        type: Number
    },
    team: {
        type: String
    },
});

const Players = mongoose.model('players', playerSchema);

const TeamSchema = new mongoose.Schema({
    teamCode: {
        type: String
    },
    name: {
        type: String
    },
    gender: {
        type: String
    },
    coach: {
        type: String
    },
});

const Teams = mongoose.model('teams', TeamSchema);

export { Players, Teams };