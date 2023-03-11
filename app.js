const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema.js");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

//allow cross-origin requests
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

mongoose.connect("mongodb://localhost:27017/GraphDB", {
  useNewUrlParser: true,
});

mongoose.connection.once("open", () => {
  console.log("connected to DB");
});

app.listen(4000, () => {
  console.log("server is started on port 4000");
});
