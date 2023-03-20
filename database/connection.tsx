import mongoose from "mongoose";
const mongo_db =
  "mongodb+srv://crud:test1234@blognode.v70x7ox.mongodb.net/NextCRUD?retryWrites=true&w=majority";

const connectMongo = async () => {
  try {
    const { connection } = await mongoose.connect(mongo_db);
    if (connection.readyState == 1) {
      console.log("Database Connected");
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export default connectMongo;
