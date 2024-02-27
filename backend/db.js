const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://sushankg4:sushankg4%40123@cluster0.9co8ve7.mongodb.net/Foodable?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true });
        console.log('CONNECTED');

        const fetch_data = await mongoose.connection.db.collection('food_items');
        const food_items = await fetch_data.find({}).toArray();
        global.food_items = food_items;

        const fetch_Categorydata = await mongoose.connection.db.collection('food_Category');
        const food_categories = await fetch_Categorydata.find({}).toArray();
        global.food_categories = food_categories;
    } catch (error) {
        console.error(error);
    }
};

module.exports = mongoDB;
