const mongoose = require("mongoose");
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose
  .connect(process.env.MONGODB_URL, options)
  .then(() => console.log("Connected to MongoDB successfully!"))
  .catch((error) => {
    console.log(error);
    console.log("Connected to MongoDB failed!");
    process.exit(1);
  });

mongoose.connection.on("connecting", () => {
  console.log("Connecting to MongoDB successfully!");
});
mongoose.connection.on("error", (err) => {
  console.log(err);
  process.exit(1);
});
