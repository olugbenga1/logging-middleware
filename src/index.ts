import express from "express";
import routes from "./routes/route";

const port = 3000;

const app = express();
app.use("/", routes);

app.listen(port, () => {
  console.log(`app is listening on ${port}`);
});
