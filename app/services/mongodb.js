import mongoose from "mongoose";

let isConcted = false;

export const connectToDb = async () => {
  mongoose.set("strictQuery", true);

  mongoose.connection.syncIndexes();
  if (isConcted) {
    ("MongoDb Connected");
    return;
  }

  try {
    await mongoose.connect(
      "mongodb+srv://navi:navi003@main.o8q8wfc.mongodb.net/todo-frontendmentor"
    );
    isConcted = true;
    ("MongoDb Connected");
  } catch (error) {
    error;
  }
};
