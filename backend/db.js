const mongoose = require('mongoose');

async function connectToMongoDB() {
  try {
    await mongoose.connect('mongodb+srv://AtrangiSwaad:AtrangiSwaad@cluster0.emtmhtw.mongodb.net/AtrangiSwaad?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');
    
    const fetched_data = await mongoose.connection.db.collection('food_items');
    const data = await fetched_data.find({}).toArray();

    const foodCategory = await mongoose.connection.db.collection('food_Category');
    const catData = await foodCategory.find({}).toArray();

    global.food_items = data;
    global.food_Category = catData;

  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

module.exports = connectToMongoDB;
