import mongoose from "mongoose";

function dbConnect(): void {
  const mongooseOptions: mongoose.ConnectionOptions = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  };

  let connectionString = process.env.MONGO_URI || "";

  if (process.env.NODE_ENV === "production") {
    connectionString = process.env.MONGO_URI_PROD || connectionString;
  } else if (process.env.NODE_ENV === "test") {
    connectionString = "mongodb://localhost:27017/test";
  }

  mongoose.connect(connectionString, mongooseOptions);
  mongoose.Promise = global.Promise;
  mongoose.connection.on("open", () => console.log(`MongoDB Connected`));
  mongoose.connection.on("error", console.error.bind(console, "Mongo Error"));
}

export default dbConnect;
