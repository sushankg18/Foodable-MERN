// mongodb+srv://sushankg4:<password>@cluster0.9co8ve7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://sushankg4:sushankg4%40123@cluster0.9co8ve7.mongodb.net/Foodable?retryWrites=true&w=majority&appName=Cluster0';
const mongoDB = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true })
        .then(async() => {
            console.log('CONNECTED')
            const fetch_data = await mongoose.connection.db.collection('food_items');
            fetch_data.find({}).toArray()
            // .then((data)=>console.log())
            // .catch((err)=>console.log(err))
        }
        )
        .catch((err) => console.log(err))
};

module.exports = mongoDB;
