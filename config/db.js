const colors = require('colors');
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Connect to MongoDB via mongoose
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: true,
    });

    // Print to confirm connection
    console.log(
      `MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold
    );
  } catch (err) {
    // Print error
    console.log(`Error: ${err.message}`.red);

    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
