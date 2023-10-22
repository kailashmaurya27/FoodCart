const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://AtrangiSwaad:AtrangiSwaad@cluster0.emtmhtw.mongodb.net/AtrangiSwaad?retryWrites=true&w=majority';

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true });
        console.log('Connected to MongoDB');

        const fetched_data = mongoose.connection.db.collection("food_items");
        const data = await fetched_data.find({}).toArray();
        console.log();
    } catch (err) {
        console.error('Connection to MongoDB failed', err);
    }
};

module.exports = connectToMongoDB;
