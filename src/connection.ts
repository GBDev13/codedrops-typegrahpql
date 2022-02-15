import mongoose from "mongoose";

mongoose.connect("mongodb://gbdev:gbdev@localhost:27017/admin", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
